import { Link } from "react-router-dom";
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
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
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
              className="text-[rgb(172,126,244)] font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/components"
              className="text-white/70 hover:text-white transition-colors"
            >
              Components
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Badge className="bg-[rgb(172,126,244)]/20 text-[rgb(172,126,244)] border-[rgb(172,126,244)]/30">
              Demo User
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-white/70">
            Welcome back! Here's an overview of your project's status and
            metrics.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/50">
                Total Users
              </CardDescription>
              <CardTitle className="text-2xl text-[rgb(172,126,244)]">
                2,847
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-white/50">
                <span className="text-green-400">+12%</span> from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/50">
                Active Projects
              </CardDescription>
              <CardTitle className="text-2xl text-[rgb(172,126,244)]">
                24
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-white/50">
                <span className="text-green-400">+3</span> new this week
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/50">
                Revenue
              </CardDescription>
              <CardTitle className="text-2xl text-[rgb(172,126,244)]">
                $12,428
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-white/50">
                <span className="text-green-400">+8%</span> from last month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-white/50">
                Conversion Rate
              </CardDescription>
              <CardTitle className="text-2xl text-[rgb(172,126,244)]">
                3.2%
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-white/50">
                <span className="text-red-400">-0.1%</span> from last month
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription className="text-white/50">
                  Latest updates from your projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[rgb(172,126,244)] rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">New user registration completed</p>
                      <p className="text-xs text-white/50">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">
                        Project "E-commerce App" deployed
                      </p>
                      <p className="text-xs text-white/50">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">API endpoint performance alert</p>
                      <p className="text-xs text-white/50">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm">Database backup completed</p>
                      <p className="text-xs text-white/50">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Progress */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
                <CardDescription className="text-white/50">
                  Current status of active projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>E-commerce Platform</span>
                      <span className="text-white/50">75%</span>
                    </div>
                    <Progress value={75} className="h-2 bg-white/10" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Mobile App</span>
                      <span className="text-white/50">60%</span>
                    </div>
                    <Progress value={60} className="h-2 bg-white/10" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Marketing Website</span>
                      <span className="text-white/50">90%</span>
                    </div>
                    <Progress value={90} className="h-2 bg-white/10" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-[rgb(172,126,244)] hover:bg-[rgb(172,126,244)]/90 text-black">
                  Create New Project
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:text-white hover:border-white/50 bg-black/20"
                >
                  View Analytics
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:text-white hover:border-white/50 bg-black/20"
                >
                  Generate Report
                </Button>
              </CardContent>
            </Card>

            {/* Search */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Search</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Search projects, users..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                />
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[rgb(172,126,244)] rounded-full flex items-center justify-center text-xs font-medium text-black">
                      JD
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-white/50">Developer</p>
                    </div>
                    <Badge className="bg-green-400/20 text-green-400 border-green-400/30 text-xs">
                      Online
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-medium text-white">
                      AS
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Alice Smith</p>
                      <p className="text-xs text-white/50">Designer</p>
                    </div>
                    <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 text-xs">
                      Away
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-medium text-white">
                      BJ
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Bob Johnson</p>
                      <p className="text-xs text-white/50">Manager</p>
                    </div>
                    <Badge className="bg-gray-400/20 text-gray-400 border-gray-400/30 text-xs">
                      Offline
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
