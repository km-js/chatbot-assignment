'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Copy, Check, Mail } from 'lucide-react';

const INTEGRATION_CODE = `<!-- Chatbot Integration Code -->
<script>
  window.ChatbotConfig = {
    organizationId: 'org_123456',
    theme: 'light',
    position: 'bottom-right'
  };
</script>
<script 
  src="https://cdn.example.com/chatbot.js" 
  async>
</script>`;

const IntegrationCodeTabs = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(INTEGRATION_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmitEmail = () => {
    alert(`Instructions has been successfully sent to you email address!`);
  };

  return (
    <Tabs defaultValue="code">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="code">Copy Code</TabsTrigger>
        <TabsTrigger value="email">Email Instructions</TabsTrigger>
      </TabsList>

      <TabsContent value="code" className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Copy and paste this code before the closing &lt;/head&gt; tag
        </p>
        <div className="relative">
          <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
            {INTEGRATION_CODE}
          </pre>
          <Button
            size="sm"
            variant="ghost"
            className="absolute md:top-2 bottom-2 right-2"
            onClick={handleCopyCode}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </TabsContent>

      <form onSubmit={onSubmitEmail}>
        <TabsContent value="email" className="space-y-4">

          <Input
            placeholder="developer@example.com"
            type="email"
          />
          <Button className="w-full gap-2" type="submit">
            <Mail className="h-4 w-4" />
            Send Instructions
          </Button>

        </TabsContent>
      </form>
    </Tabs>
  );
};

export default function IntegrationCodePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integration Code</CardTitle>
      </CardHeader>
      <CardContent>
        <IntegrationCodeTabs />
      </CardContent>
    </Card>
  );
}