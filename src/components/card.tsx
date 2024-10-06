import {
    Card as BaseCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const ContentCard = () => {
    return <BaseCard className="">
        <CardHeader>
            <div className="flex flex-row">
                <Image src={""} alt={"Profile"} />
                <div>
                    <CardTitle>Michael Ugochukwu</CardTitle>
                    <CardDescription>I am a Fullstack developer</CardDescription>
                </div>

            </div>
        </CardHeader>
        <CardContent>
            <div className="flex flex-row">
                <Badge variant="secondary">Badge</Badge>

            </div>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </BaseCard>
}

export default ContentCard