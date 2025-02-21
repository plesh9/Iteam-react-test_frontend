'use client'
import { useFormik } from 'formik'
import type { FC } from 'react'
import { Box, Button } from 'vibe-library'
import { object, string } from 'yup'
import useAuthStore from '@shared/state/useAuthStore'
import Input from '@shared/ui/Input'
import Textarea from '@shared/ui/Textarea'
import PageLayout from '@widgets/PageLayout'

const page: FC = () => {
    const login = useAuthStore((state) => state.login)
    const { values, errors, handleBlur, handleChange, touched, isValid, handleSubmit } = useFormik({
        isInitialValid: false,
        initialValues: {
            name: '',
            desiredJobTitle: '',
            description: ''
        },
        validationSchema: object({
            name: string().required('Name is required').min(3, 'Name must be at least 3 characters').max(50, 'Name must be at most 50 characters'),
            desiredJobTitle: string().required('Desired job title is required').min(3, 'Desired job title must be at least 3 characters').max(50, 'Desired job title must be at most 50 characters'),
            description: string().min(3, 'Description must be at least 3 characters').max(500, 'Description must be at most 500 characters')
        }),
        onSubmit: (userData) => login(userData)
    })

    return (
        <PageLayout>
            <Box ui={{ align: 'center', justify: 'center', grow: true }}>
                <Box as='form' ui={{ maxWidth: 100, width: '100%', align: 'center', justify: 'center', gap: 6, grow: true }} onSubmit={handleSubmit}>
                    <Box ui={{ gap: 2, width: '100%' }}>
                        <Input name='name' onBlur={handleBlur} onChange={handleChange} placeholder='Name' label='Name' title='Name' value={values.name} error={touched.name && errors.name} />
                        <Input
                            name='desiredJobTitle'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder='Enter desired job title'
                            label='Desired Job Title'
                            title='Desired Job Title'
                            value={values.desiredJobTitle}
                            error={touched.desiredJobTitle && errors.desiredJobTitle}
                        />
                        <Textarea name='description' onBlur={handleBlur} onChange={handleChange} placeholder='Enter description' label='Description' title='Description' value={values.description} error={touched.description && errors.description} />
                    </Box>
                    <Button disabled={!isValid} type='submit'>
                        Login
                    </Button>
                </Box>
            </Box>
        </PageLayout>
    )
}

export default page
