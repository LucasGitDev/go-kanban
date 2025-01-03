'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { generateSession } from './_actions/session';

function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleSession = async () => {
    setIsLoading(true);
    await generateSession();
    setIsLoading(false);
    router.push('/tasks');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Kanban Board
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button onClick={handleSession} size="lg">
            {isLoading ? 'Iniciando...' : 'Iniciar Sessão'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
