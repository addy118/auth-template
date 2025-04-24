import React, { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { useAuth } from "@/authProvider";
import UserPic from "@/components/UserPic";
import Loading from "@/components/Loading";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const { user, isAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) return <Loading item="profile" />;
  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 2000);

  return (
    <div className="mx-auto max-w-4xl px-4">
      {user && (
        <Card className="glass-dark mb-8 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
              {/* user details */}
              <div className="mb-4 flex items-center gap-4 md:mb-0">
                <Avatar className="h-16 w-16 border">
                  <UserPic name={user.name} />
                </Avatar>

                <div>
                  <h1 className="gradient-text text-2xl font-bold">
                    {user.name}
                  </h1>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
