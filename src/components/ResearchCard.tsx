
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ResearchCardProps {
  title: string;
  year: string;
  journal?: string;
  description: string;
}

const ResearchCard = ({ title, year, journal, description }: ResearchCardProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="text-sm text-muted-foreground mb-2">
          {year} {journal && `• ${journal}`}
        </div>
        <CardTitle className="text-sage-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ResearchCard;
