'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm, useController } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import type { LoginFormFields } from '@/types/login-form-fields.interface';

export default function LoginScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<LoginFormFields>({ defaultValues: {} });
  const { field: emailField } = useController({ name: 'email', control, rules: { required: 'Обязательное поле' } });
  const { field: passwordField } = useController({
    name: 'password',
    control,
    rules: { required: 'Обязательное поле' }
  });

  const onSubmit = (formData: LoginFormFields) => {
    setLoading(true);
    signIn('credentials', { ...formData, redirect: false }).then((callback) => {
      if (callback?.error) {
        console.log(callback?.error);
      } else {
        router.replace(getPublicUrl.main());
      }
    });
  };

  return (
    <div className='container max-w-lg text-left pb-20'>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
        <Input label='Email' {...emailField} />
        <Input label='Password' type='password' {...passwordField} />
        <Button loading={loading}>Login</Button>
      </form>
      <Link className='text-xs' href={getPublicUrl.register()}>
        JOIN
      </Link>
    </div>
  );
}
