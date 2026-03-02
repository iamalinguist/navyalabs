import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const leadershipProfiles = [
  {
    name: 'Dr. Vivek Tripathi',
    title: 'Co-Founder & CEO',
    catchphrase: 'Visionary and Consultant',
    image: PlaceHolderImages.find(p => p.id === 'vivek-tripathi'),
    bio: 'Alumnus of IIT Bombay and IIT (BHU) Varanasi. Specializes in consulting, institutional strategy, and academic transformation. He focuses on aligning technology with institutional goals, governance, and long-term scalability.',
    email: 'sopan.tripathi@gmail.com',
    phone: '7987876701'
  },
  {
    name: 'Mr. Esh Rathod',
    title: 'Co-Founder & CTO',
    catchphrase: 'Techy Code Ninja',
    image: PlaceHolderImages.find(p => p.id === 'esh-rathod'),
    bio: 'Alumnus of IIT Bombay. Specializes in technology architecture and large-scale platform development. He leads product design, technical innovation, and system reliability, building secure, enterprise-grade solutions.',
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our team combines deep academic insight with world-class engineering expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {leadershipProfiles.map(profile => (
            <Card key={profile.name} className="overflow-hidden bg-card shadow-lg border-border/50">
                <CardHeader className="flex flex-col sm:flex-row items-center gap-6 p-6">
                    {profile.image && (
                      <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-background shadow-md">
                        <Image
                          src={profile.image.imageUrl}
                          alt={profile.image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={profile.image.imageHint}
                        />
                      </div>
                    )}
                    <div className="text-center sm:text-left">
                        <CardTitle className="text-2xl">{profile.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">{profile.title}</CardDescription>
                        {profile.catchphrase && (
                            <p className="text-sm text-muted-foreground mt-2 italic">"{profile.catchphrase}"</p>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground">{profile.bio}</p>
                </CardContent>
            </Card>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center border-t border-border pt-8">
            <h3 className="font-semibold text-lg text-foreground">A Trusted Institutional Partner</h3>
            <p className="mt-2 text-muted-foreground">
                Navya Labs is a trustee and recognized partner of the <a href="https://makeindiascientific.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MIS Group of IIT (BHU) Varanasi</a>, reflecting strong academic collaboration and institutional trust.
            </p>
        </div>
      </div>
    </section>
  );
}
