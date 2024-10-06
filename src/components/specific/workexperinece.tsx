import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, Monitor, Briefcase } from "lucide-react"
import { FaGoogle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
const WorkExperience = () => {
    return <Card className="w-full">
        <CardHeader>
            <CardTitle>Work Experience</CardTitle>
            <CardDescription>The Internships and part time work I have done so far</CardDescription>
        </CardHeader>
        <CardContent>
            <Alert className="mb-2">
                <FaGoogle className="h-4 w-4" />
                <AlertTitle>Google Software Engineer intern</AlertTitle>
                <AlertDescription className="flex justify-between">
                    Hybrid, Mountain view, California

                    <div>
                        May 2024 - Aug 2024
                    </div>
                </AlertDescription>
                <AlertDescription className="mt-2">
                    <Badge variant="outline" className="mr-1" >Flutter</Badge>
                    <Badge variant="outline" className="mr-1" >Java</Badge>
                    <Badge variant="outline" className="mr-1" >Mobile</Badge>
                </AlertDescription>
            </Alert>
            <Alert className="mb-2">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Rondevu Software Engineer</AlertTitle>
                <AlertDescription className="flex justify-between">
                    Remote, Dallas, Texas
                    <div>
                        Nov 2023 - Mar 2024
                    </div>
                </AlertDescription>
                <AlertDescription className="mt-2">
                    <Badge variant="outline" className="mr-1" >React Native</Badge>
                    <Badge variant="outline" className="mr-1" >Python</Badge>
                    <Badge variant="outline" className="mr-1" >Mobile</Badge>
                    <Badge variant="outline" className="mr-1">Backend</Badge>
                    <Badge variant="outline" className="mr-1">FastApi</Badge>
                </AlertDescription>
            </Alert>

            <Alert className="mb-2">
                <Briefcase className="h-4 w-4" />
                <AlertTitle>Rivian Software Engineer Intern</AlertTitle>
                <AlertDescription className="flex justify-between">
                    Hybrid, Palo Alto, California
                    <div>
                        May 2023 - Aug 2024
                    </div>
                </AlertDescription>
                <AlertDescription className="mt-2">
                    <Badge variant="outline" className="mr-1" >React</Badge>
                    <Badge variant="outline" className="mr-1" >Java</Badge>
                    <Badge variant="outline" className="mr-1" >Spring</Badge>
                    <Badge variant="outline" className="mr-1" >Full stack</Badge>
                </AlertDescription>
            </Alert>


        </CardContent>
    </Card>

}

export default WorkExperience