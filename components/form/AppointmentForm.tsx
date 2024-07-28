"use client"

import { getAppointmentSchema } from '@/lib/validation';
import { Appointment } from '@/types/appwrite.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';


export const AppointmentForm = ({
  userId,
  patientId,
  type='create',
  appointment,
  setOpen
}: {
  userId: string,
  patientId: string,
  type: "create" | "schedule" | "cancel",
  appointment?: Appointment;
  setOpen?: Dispatch<SetStateAction<boolean>>
}) => {

  // const router = useRouter();

  const [isLoading, setIsLoading] = useState(false)

  const AppointmentFormValidation = getAppointmentSchema(type)

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: appointment ? appointment.primaryPhysician : "",
      schedule: appointment ? new Date(appointment?.schedule!): new Date(Date.now()),
      reason: appointment ? appointment.reason : "",
      note: appointment?.note || " ",
      cancellationReason: appointment?.cancellationReason || ""
    }
  })


  return (
    <div>AppointmentForm</div>
  )
}