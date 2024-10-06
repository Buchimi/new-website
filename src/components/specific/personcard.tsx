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
import { Button } from "@/components/ui/button"
import { Link, Mail } from "lucide-react"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

const MyCard = () => {
    return <BaseCard className="max-w-lg">
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
            <div className="flex flex-row flex-wrap">
                <Badge variant="secondary" className="m-1">React Front end</Badge>
                <Badge variant="secondary" className="m-1">Flutter Mobile dev</Badge>
                <Badge variant="secondary" className="m-1">Python Backend and scripting</Badge>
                <Badge variant="secondary" className="m-1">Rust embedded systems</Badge>
                <Badge variant="secondary" className="m-1">Java + Spring backend dev</Badge>
            </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-around">
            <Button className="mb-2">
                <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button className="mb-2">
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                Check out my github
            </Button>
            <Button className="mb-2">
                <Link className="mr-2 h-4 w-4" />
                Old site
            </Button>
        </CardFooter>
    </BaseCard>
}

export default MyCard