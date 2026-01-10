'use client';

import { Location } from '@/types/location';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Edit, Trash2, Star } from 'lucide-react';

interface LocationCardProps {
  location: Location;
  onEdit: (location: Location) => void;
  onDelete: (locationId: string) => void;
  onSetDefault: (locationId: string) => void;
  isDeleting?: boolean;
}

export function LocationCard({
  location,
  onEdit,
  onDelete,
  onSetDefault,
  isDeleting = false,
}: LocationCardProps) {
  const fullAddress = [
    location.address,
    location.apt_unit,
    location.suburb,
    location.city,
    location.postal_code,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <Card className="hover:shadow-md transition-shadow border-border w-full max-w-full overflow-hidden">
      <CardHeader className="pb-2 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-base sm:text-lg md:text-xl truncate">
                {location.nickname}
              </h3>
              {location.is_default && (
                <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm px-2 sm:px-3 py-0.5">
                  <Star className="w-3 h-3 mr-1" />
                  Default
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6 pt-0">
        <div className="space-y-3">
          {/* Address */}
          <div className="flex items-start gap-1.5 sm:gap-2 text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground break-words leading-relaxed">
              {fullAddress}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {!location.is_default && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSetDefault(location.id)}
                className="text-xs sm:text-sm h-8 sm:h-9"
                disabled={isDeleting}
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                Set Default
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(location)}
              className="text-xs sm:text-sm h-8 sm:h-9"
              disabled={isDeleting}
            >
              <Edit className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(location.id)}
              className="text-xs sm:text-sm h-8 sm:h-9 text-destructive hover:text-destructive"
              disabled={isDeleting}
            >
              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

