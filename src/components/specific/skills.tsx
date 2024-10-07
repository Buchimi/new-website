"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
type keys =
    | "python"
    | "dart"
    | "java"
    | "javascript"
    | "typescript"
    | "rust"
    | "c++"
    | "c"
    | "flutter"
    | "spring"
    | "react"
    | "fastApi"
    | "linux"
    | "fullstack"
    | "backend"
    | "frontend"
    | "embedded"
    | "mobile"
    | "leetcode";

interface StatemapValue {
    title: string;
    paragraph: string;
    usedthisto: string[];
    proficiency: number;
    tools: string[];
}

const statemap: Partial<Record<keys, StatemapValue>> = {
    python: {
        title: "Python",
        paragraph: "I have used Python extensively in multiple projects for scripting, data processing, and server development.",
        usedthisto: [
            "Build servers using FastAPI",
            "Create machine learning models",
            "Solve algorithmic challenges on Leetcode",
            "Interface with MongoDB databases"
        ],
        proficiency: 5,
        tools: ["FastAPI", "PyTorch", "Pandas", "NumPy"],
    },
    dart: {
        title: "Dart / Flutter",
        paragraph: "Used Dart and Flutter for mobile and web app development during my internship at Google.",
        usedthisto: [
            "Develop new features in Google's Family Link app",
            "Create responsive animated widgets",
            "Improve testing infrastructure to handle more use cases"
        ],
        proficiency: 5,
        tools: ["Flutter", "Dart"],
    },
    java: {
        title: "Java",
        paragraph: "Proficient in Java, used in backend services and microservices.",
        usedthisto: [
            "Develop microservices with Spring for backend operations",
            "Handle CRUD operations with DynamoDB",
            "Unit testing with JUnit and Mockito"
        ],
        proficiency: 4,
        tools: ["Spring", "JUnit", "Mockito"],
    },
    javascript: {
        title: "JavaScript / TypeScript",
        paragraph: "Extensive experience in frontend and backend development using JavaScript and TypeScript.",
        usedthisto: [
            "Build responsive web apps with React and NextJS",
            "Develop server-side services using NodeJS",
            "Integrate Firebase services"
        ],
        proficiency: 5,
        tools: ["React", "NextJS", "NodeJS", "Firebase"],
    },
    rust: {
        title: "Rust",
        paragraph: "Learning Rust for system-level programming and efficient memory-safe applications.",
        usedthisto: [
            "Write FFI bindings for Flutter in Rust",
            "Explore Rust for high-performance applications"
        ],
        proficiency: 3,
        tools: ["Cargo", "Tokio"],
    },
    "c++": {
        title: "C++",
        paragraph: "Used C++ in low-level and performance-critical environments.",
        usedthisto: [
            "FFI development for Flutter",
            "System-level programming"
        ],
        proficiency: 3,
        tools: ["C++"],
    },
    flutter: {
        title: "Flutter",
        paragraph: "Worked with Flutter for mobile app development at Google.",
        usedthisto: [
            "Build responsive mobile apps",
            "Improve accessibility with text-to-speech features"
        ],
        proficiency: 4,
        tools: ["Flutter", "Dart"],
    },
    spring: {
        title: "Spring",
        paragraph: "Developed microservices and backend systems using Spring.",
        usedthisto: [
            "Build RESTful services",
            "Implement dependency injection",
            "Manage data using DynamoDB"
        ],
        proficiency: 4,
        tools: ["Spring", "JUnit"],
    },
    react: {
        title: "React",
        paragraph: "Extensive experience with React for web application development.",
        usedthisto: [
            "Develop web apps with React and NextJS",
            "Implement interactive features and animations"
        ],
        proficiency: 5,
        tools: ["React", "NextJS", "Tailwind"],
    },
    fastApi: {
        title: "FastAPI",
        paragraph: "Used FastAPI for building efficient backend services.",
        usedthisto: [
            "Develop REST APIs",
            "Integrate with MongoDB databases"
        ],
        proficiency: 4,
        tools: ["FastAPI"],
    },
    linux: {
        title: "Linux",
        paragraph: "Experienced with Linux environments for development and deployment.",
        usedthisto: [
            "Set up development environments",
            "Deploy applications",
            "Automate my computer"
        ],
        proficiency: 4,
        tools: ["Linux", "Bash"],
    },
    fullstack: {
        title: "Full-stack Development",
        paragraph: "Worked across the stack, handling both frontend and backend tasks.",
        usedthisto: [
            "Build full-stack applications using React, Node.js, and Spring",
            "Handle RESTful API development"
        ],
        proficiency: 5,
        tools: ["React", "NodeJS", "Spring", "Python", "FastApi"],
    },
    backend: {
        title: "Backend Development",
        paragraph: "Focused on backend architecture and microservices.",
        usedthisto: [
            "Develop microservices in Spring and NodeJS",
            "Handle data storage with DynamoDB and Redis"
        ],
        proficiency: 5,
        tools: ["Spring", "NodeJS", "DynamoDB", "Firestore"],
    },
    frontend: {
        title: "Frontend Development",
        paragraph: "Developed responsive and dynamic frontends using modern frameworks.",
        usedthisto: [
            "Build UIs with React and Material UI",
            "Ensure responsive design and accessibility"
        ],
        proficiency: 5,
        tools: ["React", "Material UI", "NextJS"],
    },
    embedded: {
        title: "Embedded Systems Development",
        paragraph: "Experience with embedded systems for hardware-software integration.",
        usedthisto: [
            "Develop and debug embedded systems",
            "Work with low-level hardware interfaces"
        ],
        proficiency: 3,
        tools: ["C", "C++"],
    },
    mobile: {
        title: "Mobile App Development",
        paragraph: "Developed mobile apps using Flutter and React Native.",
        usedthisto: [
            "Build cross-platform mobile apps",
            "Improve app performance and UI responsiveness"
        ],
        proficiency: 4,
        tools: ["Flutter", "React Native"],
    },
    leetcode: {
        title: "Leetcode",
        paragraph: "Actively solve algorithmic problems on Leetcode.",
        usedthisto: [
            "Practice for coding interviews",
            "Improve problem-solving skills"
        ],
        proficiency: 4,
        tools: ["Leetcode"],
    },
};

const SkillsCard = () => {
    const [index, setIndex] = useState<keys | null>(null)
    return <Card className="w-full">
        {index == null ? <SkillsSnapshot onClick={(somestr: keys) => {
            if (index != null) {
                setIndex(null)
            } else {
                setIndex(somestr)
            }
        }} /> : <SkillsExpanded skill={index} toggleout={() => setIndex(null)} />}
    </Card>
}

type SnapshotProps = {
    onClick: (s: keys) => void
}
const SkillsSnapshot = ({ onClick }: SnapshotProps) => {

    return <div>
        <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Here is a snapshot of the languages and tooling I have experience with. The skills are clickable</CardDescription>
        </CardHeader>
        <CardContent>
            Languages
            <div className="flex space-x-2 flex-wrap">
                <Button variant="outline" onClick={() => onClick("python")}>Python</Button>
                <Button variant="outline" onClick={() => onClick("dart")}>Dart / Flutter</Button>
                <Button variant="outline" onClick={() => onClick("java")}>Java</Button>
                <Button variant="outline" onClick={() => onClick("javascript")}>Javascript / Typescript</Button>
                <Button variant="outline" disabled onClick={() => onClick("rust")}>Rust</Button>
                <Button variant="outline" disabled onClick={() => onClick("c++")}>C++ </Button>
            </div>
        </CardContent>
        <CardContent>
            Tooling and Frameworks
            <div className="flex space-x-2 flex-wrap">
                <Button variant="outline" onClick={() => onClick("flutter")}>Flutter</Button>
                <Button variant="outline" onClick={() => onClick("spring")}>Spring</Button>
                <Button variant="outline" onClick={() => onClick("react")}>React</Button>
                <Button variant="outline" onClick={() => onClick("fastApi")}>Fast Api</Button>
                <Button variant="outline" disabled onClick={() => onClick("linux")}>Linux</Button>
            </div>
        </CardContent>
        <CardContent>
            Proficiencies
            <div className="flex space-x-2 flex-wrap">
                <Button variant="outline" onClick={() => onClick("mobile")}>Mobile/app development</Button>
                <Button variant="outline" disabled onClick={() => onClick("fullstack")}>Full stack development</Button>
                <Button variant="outline" disabled onClick={() => onClick("backend")}>Backend development</Button>
                <Button variant="outline" disabled onClick={() => onClick("frontend")}>Frontend development</Button>
                <Button variant="outline" disabled onClick={() => onClick("embedded")}>Embedded systems development</Button>
                {/* <Button variant="outline">Leetcode</Button> */}
            </div>
        </CardContent>
    </div>
}
const SkillsExpanded = ({ skill, toggleout }: { skill: keys, toggleout: () => void }) => {
    const informationBase = statemap[skill]!
    return <div>

        <CardHeader>
            <div className="flex flex-row">
                <Button variant={"outline"} onClick={toggleout}> <ArrowLeft className="h-4 w-4" /> </Button>
                <CardTitle className="self-center">
                    {informationBase.title}
                </CardTitle>
            </div>
            <CardDescription>
                {informationBase.paragraph}
            </CardDescription>
        </CardHeader>
        <CardContent>
            I have used {informationBase.title.toLowerCase()} to
            <ul>
                {informationBase.usedthisto.map((val) => <li>
                    - {val}
                </li>
                )}
            </ul>
        </CardContent>

    </div>

}
export default SkillsCard