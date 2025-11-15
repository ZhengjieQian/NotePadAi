import {Input} from "@/app/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/card";

export function ExampleCard() {
  return (
    <Card className="border-foreground/15">
        <CardHeader className="border-b border-foreground/10">
            <CardTitle>Example Input</CardTitle>
            <CardDescription>This is an example of a card component with an input field.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
            <Input  
                type="text"
                placeholder="Type something..."
            />
        </CardContent>
        <CardFooter className="px-6">
            <button
                className="h-10 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
                Submit
            </button>
        </CardFooter>
    </Card> 
    );
}
