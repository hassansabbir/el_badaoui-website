"use client";

import { useState } from "react";
import {
  User,
  FolderOpen,
  Plus,
  LogOut,
  Menu,
  X,
  Settings2,
  Home,
} from "lucide-react";
import Container from "@/components/layout/Container";
import MyProfile from "@/components/ui/website/profile/sections/MyProfile";
import MyProjects from "@/components/ui/website/profile/sections/MyProjects";
import NewProject from "@/components/ui/website/profile/sections/NewProject";
import Settings from "@/components/ui/website/profile/sections/Settings";
import Link from "next/link";

const ProfileMainPage = () => {
  const [activeTab, setActiveTab] = useState("my-profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { id: "my-profile", name: "My Profile", icon: User },
    { id: "my-projects", name: "My Projects", icon: FolderOpen },
    { id: "new-project", name: "New Project", icon: Plus },
    { id: "settings", name: "Settings", icon: Settings2 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "my-profile":
        return <MyProfile />;
      case "my-projects":
        return <MyProjects />;
      case "new-project":
        return <NewProject />;
      case "settings":
        return <Settings />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <Container>
        <div className="flex gap-6 py-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed top-6 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 fixed lg:relative top-0 left-0 h-screen lg:h-auto w-64 bg-white lg:rounded-2xl shadow-xl p-6 transition-transform duration-300 ease-in-out z-40`}
          >
            <div className="flex flex-col h-full">
              {/* Profile Header */}
              <div className="mb-8 text-center">
                {/* Profile Header */}
                <div className="mb-8 text-center">
                  {/* Image uploader placeholder */}
                  <div className="relative inline-block mb-4">
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          // Handle file upload logic here
                          console.log("Selected file:", file);
                        }
                      }}
                    />
                    <label
                      htmlFor="avatar-upload"
                      className="cursor-pointer block w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors"
                    >
                      <User size={32} />
                    </label>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 cursor-pointer px-4 py-3 rounded-xl transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-[#F22542] text-white shadow-lg"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  );
                })}
              </nav>

              <Link href="/">
                <button className="flex items-center w-full cursor-pointer gap-3 px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                  <Home size={20} />
                  <span className="font-medium">Home</span>
                </button>
              </Link>

              {/* Logout Button */}
              <button className="flex items-center cursor-pointer gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </aside>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            />
          )}

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-2xl shadow-xl p-8">
            {renderContent()}
          </main>
        </div>
      </Container>
    </div>
  );
};

export default ProfileMainPage;
