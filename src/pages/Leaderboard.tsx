import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Medal, 
  Award,
  Target,
  Rocket,
  Timer,
  Star
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

export default function Leaderboard() {
  const leaderboardData = [
    {
      rank: 1,
      player: "Commander Nova",
      mission: "Atlas Intercept",
      result: "SUCCESS",
      score: 9850,
      time: "18:42:15",
      fuel: "23%",
      badge: "Perfect Navigation"
    },
    {
      rank: 2,
      player: "Captain Stellar",
      mission: "Jupiter Explorer", 
      result: "SUCCESS",
      score: 9200,
      time: "12:15:30",
      fuel: "45%",
      badge: "Fuel Efficient"
    },
    {
      rank: 3,
      player: "Pilot Cosmos",
      mission: "Mars Landing",
      result: "SUCCESS", 
      score: 8750,
      time: "08:33:22",
      fuel: "67%",
      badge: "Speed Demon"
    },
    {
      rank: 4,
      player: "Navigator Luna",
      mission: "Solar System Tour",
      result: "SUCCESS",
      score: 8500,
      time: "25:18:45",
      fuel: "12%",
      badge: "Explorer"
    },
    {
      rank: 5,
      player: "Engineer Orion",
      mission: "Atlas Intercept",
      result: "PARTIAL",
      score: 7800,
      time: "22:07:11",
      fuel: "8%",
      badge: "Close Call"
    },
    {
      rank: 6,
      player: "Specialist Vega",
      mission: "Europa Mission",
      result: "SUCCESS",
      score: 7600,
      time: "16:45:33",
      fuel: "34%",
      badge: "Ice Explorer"
    },
    {
      rank: 7,
      player: "Commander Rigel",
      mission: "Venus Flyby",
      result: "SUCCESS",
      score: 7200,
      time: "09:22:55",
      fuel: "52%",
      badge: "Heat Survivor"
    },
    {
      rank: 8,
      player: "Pilot Andromeda",
      mission: "Asteroid Belt",
      result: "PARTIAL",
      score: 6900,
      time: "14:18:40",
      fuel: "29%",
      badge: "Rock Dodger"
    }
  ];

  const achievements = [
    {
      icon: <Target className="h-8 w-8 text-space-gold" />,
      title: "Perfect Navigator",
      description: "Complete any mission with 100% accuracy",
      holders: 12
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Speed Runner", 
      description: "Complete Mars mission under 8 hours",
      holders: 8
    },
    {
      icon: <Star className="h-8 w-8 text-space-purple" />,
      title: "Atlas Hunter",
      description: "Successfully intercept 3I/ATLAS comet",
      holders: 3
    },
    {
      icon: <Timer className="h-8 w-8 text-accent" />,
      title: "Endurance Pilot",
      description: "Complete 24+ hour continuous mission",
      holders: 15
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-space-gold" />;
      case 2:
        return <Medal className="h-6 w-6 text-muted-foreground" />;
      case 3:
        return <Award className="h-6 w-6 text-space-purple" />;
      default:
        return <div className="h-6 w-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</div>;
    }
  };

  const getResultBadge = (result: string) => {
    switch (result) {
      case 'SUCCESS':
        return <Badge className="bg-space-green/20 text-space-green">Success</Badge>;
      case 'PARTIAL':
        return <Badge className="bg-space-gold/20 text-space-gold">Partial</Badge>;
      case 'FAILED':
        return <Badge className="bg-destructive/20 text-destructive">Failed</Badge>;
      default:
        return <Badge variant="secondary">{result}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 text-primary">
            Mission Leaderboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track the achievements of elite space commanders from around the galaxy. 
            Compete for the highest scores and most challenging mission completions.
          </p>
        </motion.div>

        {/* Top Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center text-primary">
            Elite Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="space-card hover:neon-glow transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">
                      {achievement.icon}
                    </div>
                    <CardTitle className="font-orbitron text-lg">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm mb-3">
                      {achievement.description}
                    </p>
                    <div className="text-xs text-primary">
                      {achievement.holders} pilots achieved
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main Leaderboard */}
        <section>
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-center text-primary">
            Top Commanders
          </h2>
          <div className="space-y-4">
            {leaderboardData.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`space-card hover:neon-glow transition-all duration-300 ${
                  entry.rank <= 3 ? 'border-primary/50' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      {/* Rank and Player */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border">
                          {getRankIcon(entry.rank)}
                        </div>
                        <div>
                          <h3 className="font-orbitron font-semibold text-lg">
                            {entry.player}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {entry.mission}
                          </p>
                        </div>
                      </div>

                      {/* Mission Stats */}
                      <div className="hidden md:flex items-center space-x-8">
                        <div className="text-center">
                          <p className="text-2xl font-orbitron font-bold text-primary">
                            {entry.score.toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground">Score</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">{entry.time}</p>
                          <p className="text-xs text-muted-foreground">Time</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-space-gold">{entry.fuel}</p>
                          <p className="text-xs text-muted-foreground">Fuel Left</p>
                        </div>
                      </div>

                      {/* Result and Badge */}
                      <div className="flex flex-col items-end space-y-2">
                        {getResultBadge(entry.result)}
                        <Badge variant="outline" className="text-xs">
                          {entry.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Mobile Stats */}
                    <div className="md:hidden mt-4 grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-lg font-orbitron font-bold text-primary">
                          {entry.score.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">Score</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{entry.time}</p>
                        <p className="text-xs text-muted-foreground">Time</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-space-gold">{entry.fuel}</p>
                        <p className="text-xs text-muted-foreground">Fuel Left</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-card max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-orbitron font-bold mb-4 text-primary">
            Ready to Compete?
          </h2>
          <p className="text-muted-foreground mb-6">
            Start your mission today and climb the leaderboard. 
            Every successful mission brings you closer to legendary status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/missions"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-glow transition-colors"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Start Mission
            </a>
            <a 
              href="/simulator"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Star className="mr-2 h-4 w-4" />
              Practice in Simulator
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}