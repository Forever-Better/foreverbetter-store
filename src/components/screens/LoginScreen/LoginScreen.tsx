'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm, useController } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import type { LoginFormFields } from '@/types/login-form-fields.interface';

export default function LoginScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { control, handleSubmit } = useForm<LoginFormFields>({ defaultValues: {} });
  const { field: emailField } = useController({ name: 'email', control, rules: { required: 'Обязательное поле' } });
  const { field: passwordField } = useController({
    name: 'password',
    control,
    rules: { required: 'Обязательное поле' }
  });

  const onSubmit = handleSubmit((formData: LoginFormFields) => {
    setLoading(true);
    signIn('credentials', { ...formData, redirect: false }).then((callback) => {
      setLoading(false);
      if (callback?.error) {
        setError(callback.error);
        toast.error(callback.error);
      } else {
        router.replace(getPublicUrl.main());
      }
    });
  });

  return (
    <div className='container max-w-lg text-left pb-20'>
      <form
        className='flex flex-col gap-6'
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Input label='Email' {...emailField} />
        <Input label='Password' type='password' {...passwordField} />
        {error && <span className='text-error text-xs'>{error}</span>}
        <Button loading={loading}>Login</Button>
      </form>
      <Link className='text-xs' href={getPublicUrl.register()}>
        JOIN
      </Link>
    </div>
  );
}
