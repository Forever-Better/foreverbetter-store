'use client';

import { useForm, useController } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { getApiUrl } from '@/helpers/getApiUrl';
import type { RegisterFormFields } from '@/types/register-form-fields.interface';

export default function RegisterScreen() {
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<RegisterFormFields>({ defaultValues: { email: '', password: '' } });
  const { field: emailField } = useController({ name: 'email', control, rules: { required: 'Обязательное поле' } });
  const { field: passwordField } = useController({
    name: 'password',
    control,
    rules: { required: 'Обязательное поле' }
  });

  const onSubmit = handleSubmit((formData, e) => {
    e?.preventDefault();
    fetch(getApiUrl.register(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  });

  return (
    <div className='container max-w-lg text-center pb-20'>
      <form className='flex flex-col gap-6' onSubmit={onSubmit}>
        <Input helperText={errors.email?.message} label='Email' {...emailField} />
        <Input helperText={errors.password?.message} label='Password' type='password' {...passwordField} />
        <Button>Register</Button>
      </form>
    </div>
  );
}
