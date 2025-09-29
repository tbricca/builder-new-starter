import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

export default function Components() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-lg sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc5b47d20f6a943e485717e5895739988%2F8dd0de69bdfd4e9891f0c5f78ed52c30"
              alt="Builder.io"
              className="h-6 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white/70 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white/70 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/dashboard"
              className="text-white/70 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/components"
              className="text-[rgb(172,126,244)] font-medium"
            >
              Components
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <Badge className="bg-[rgb(172,126,244)]/20 text-[rgb(172,126,244)] border-[rgb(172,126,244)]/30 px-3 py-1 text-xs font-medium rounded-full mb-4">
            UI LIBRARY
          </Badge>
          <h1 className="text-3xl font-bold mb-2">Component Showcase</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore the pre-built UI components available in this starter
            template. All components are built with Radix UI and styled with
            Tailwind CSS.
          </p>
        </div>

        {/* Component Sections */}
        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white/5 mb-8">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="data">Data Display</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
          </TabsList>

          {/* Buttons Tab */}
          <TabsContent value="buttons" className="space-y-8">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription className="text-white/50">
                  Different button styles for various use cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black">
                    Primary
                  </Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:text-white hover:border-white/50 bg-black/20"
                  >
                    Outline
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    Ghost
                  </Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
                <CardDescription className="text-white/50">
                  Different button sizes for various contexts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="sm"
                    className="bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black"
                  >
                    Small
                  </Button>
                  <Button className="bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black">
                    Default
                  </Button>
                  <Button
                    size="lg"
                    className="bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black"
                  >
                    Large
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-8">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription className="text-white/50">
                  Input fields, labels, and form controls
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="flex min-h-[80px] w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(172,126,244)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="notifications"
                    checked={isEnabled}
                    onCheckedChange={setIsEnabled}
                  />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>

                <div className="space-y-2">
                  <Label>Volume: {sliderValue[0]}</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-8">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Alerts & Notifications</CardTitle>
                <CardDescription className="text-white/50">
                  Alert components for different message types
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-[rgb(172,126,244)]/30 bg-[rgb(172,126,244)]/10">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert message.
                  </AlertDescription>
                </Alert>

                <Alert className="border-green-500/30 bg-green-500/10 text-green-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    Operation completed successfully!
                  </AlertDescription>
                </Alert>

                <Alert className="border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please review your settings before continuing.
                  </AlertDescription>
                </Alert>

                <Alert className="border-red-500/30 bg-red-500/10 text-red-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    An error occurred while processing your request.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Display Tab */}
          <TabsContent value="data" className="space-y-8">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Badges & Progress</CardTitle>
                <CardDescription className="text-white/50">
                  Components for displaying status and progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Badges</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-[rgb(172,126,244)]/20 text-[rgb(172,126,244)] border-[rgb(172,126,244)]/30">
                      Primary
                    </Badge>
                    <Badge className="bg-green-400/20 text-green-400 border-green-400/30">
                      Success
                    </Badge>
                    <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
                      Warning
                    </Badge>
                    <Badge className="bg-red-400/20 text-red-400 border-red-400/30">
                      Error
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-white/30 text-white"
                    >
                      Outline
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Progress Bars</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Loading...</span>
                        <span>33%</span>
                      </div>
                      <Progress value={33} className="h-2 bg-white/10" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Processing...</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} className="h-2 bg-white/10" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Complete!</span>
                        <span>100%</span>
                      </div>
                      <Progress value={100} className="h-2 bg-white/10" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-8">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Cards & Layout</CardTitle>
                <CardDescription className="text-white/50">
                  Layout components and card variants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                      <CardTitle className="text-lg">Simple Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/70">
                        This is a simple card with basic content.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Card with Description
                      </CardTitle>
                      <CardDescription className="text-white/50">
                        Additional context goes here
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/70">
                        This card includes a description in the header.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Interactive Card
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/70 mb-4">
                        Cards can contain interactive elements.
                      </p>
                      <Button
                        size="sm"
                        className="bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black"
                      >
                        Action
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm mb-4">
            These components are built with Radix UI primitives and can be
            easily customized with Tailwind CSS.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white hover:text-white hover:border-white/50 bg-black/20"
          >
            <a
              href="https://www.radix-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Radix UI
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
