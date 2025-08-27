'use client';

import { eventFormSchema } from '@/schema/events';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../ui/form';

interface EventFormProps {
  id: string;
  name: string;
  description?: string;
  durationInMinutes: number;
  isActive: boolean;
}

export default function EventForm({ event }: { event?: EventFormProps }) {
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: event
      ? {
          ...event,
        }
      : {
          isActive: true,
          durationInMinutes: 30,
          description: '',
          name: '',
        },
  });

  return (
    <Form {...form}>
      <form ></form>
    </Form>
  );
}
