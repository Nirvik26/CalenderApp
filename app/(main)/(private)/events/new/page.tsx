import EventForm from '@/components/forms/EventForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewEventpage() {
  return (
    <Card className="max-w-md mx-auto broder-8 border-blue-200 shadow-2xl shadow-accent-foreground">
      <CardHeader>
        <CardTitle>New Event</CardTitle>
      </CardHeader>
      <CardContent><EventForm /></CardContent>
    </Card>
  );
}
