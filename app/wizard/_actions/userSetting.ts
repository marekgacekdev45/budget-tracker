'use server'

import { UpdateUserCurrencySchema } from '@/schema/userSettings'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils'
import { prisma } from '@prisma/client'

export async function UpdateUserCurrency(currency: string) {
	const parsedBody = UpdateUserCurrencySchema.safeParse({
		currency,
	})

    if(!parsedBody.success){
        throw parsedBody.error
    }

    const user = await currentUser()

    if(!user) {
        redirect("/sign-in")
    }

    const userSettings = await prisma.userSettings.update({
        where:{userId:user.id},

        data:{
            currency
        }
    },

)

return userSettings
}
