'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>
            This page is coming soon. Settings management will be available here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Future features will include:
          </p>
          <ul className="list-disc list-inside mt-2 text-muted-foreground">
            <li>Notification preferences</li>
            <li>Email preferences</li>
            <li>Privacy settings</li>
            <li>Account security</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

