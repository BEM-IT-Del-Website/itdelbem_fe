import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function OrganizationPage() {
  const departments = [
    {
      name: "Academic Affairs",
      description: "Focuses on academic policy, curriculum development, and student academic support services.",
      head: "Sarah Mitchell",
      members: 8,
      icon: <GraduationCap className="w-8 h-8 text-[#3B82F6]" />,
      responsibilities: [
        "Academic policy advocacy",
        "Curriculum improvement initiatives", 
        "Student academic support programs",
        "Faculty-student liaison"
      ]
    },
    {
      name: "Student Welfare",
      description: "Addresses student life, health services, accommodation, and general welfare concerns.",
      head: "Michael Thompson",
      members: 10,
      icon: <Users className="w-8 h-8 text-[#3B82F6]" />,
      responsibilities: [
        "Student support services",
        "Health and wellness programs",
        "Accommodation assistance",
        "Student rights advocacy"
      ]
    },
    {
      name: "Events & Activities",
      description: "Organizes campus events, cultural activities, and student engagement programs.",
      head: "Emily Chen",
      members: 12,
      icon: <Calendar className="w-8 h-8 text-[#3B82F6]" />,
      responsibilities: [
        "Campus event planning",
        "Cultural activities coordination",
        "Student engagement programs",
        "Community outreach events"
      ]
    },
    {
      name: "Finance & Administration",
      description: "Manages organizational finances, budgeting, and administrative operations.",
      head: "David Rodriguez",
      members: 6,
      icon: <Briefcase className="w-8 h-8 text-[#3B82F6]" />,
      responsibilities: [
        "Budget management",
        "Financial planning and oversight",
        "Administrative coordination",
        "Resource allocation"
      ]
    }
  ];

  const achievements = [
    {
      title: "Student Satisfaction Survey",
      description: "Achieved 92% student satisfaction rate in campus services",
      year: "2024",
      category: "Service Excellence"
    },
    {
      title: "Innovation Awards",
      description: "Won Best Student Organization Innovation Award",
      year: "2023",
      category: "Innovation"
    },
    {
      title: "Community Impact",
      description: "Successfully organized 50+ community service programs",
      year: "2024",
      category: "Community Service"
    },
    {
      title: "Academic Support",
      description: "Helped improve student academic performance by 15%",
      year: "2024", 
      category: "Academic Excellence"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Organization</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our student executive body is structured and organized to serve 
            the diverse needs of our university community effectively.
          </p>
        </div>

        {/* Organization Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-gradient-to-br from-[#3B82F6]/10 to-[#2563EB]/10 border-[#3B82F6]/20">
            <CardHeader>
              <Target className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                To represent, advocate for, and enhance the overall university experience 
                of all students through effective leadership and dedicated service.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
              <CardTitle className="text-2xl">36+</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Active members across all departments working together to serve 
                the student body with dedication and excellence.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
              <CardTitle className="text-2xl">50+</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Programs and initiatives launched this year to improve student life, 
                academic support, and campus community engagement.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Organizational Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      {dept.icon}
                      <div>
                        <CardTitle className="text-xl">{dept.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="bg-[#3B82F6]/10 text-[#3B82F6]">
                            {dept.members} Members
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-3">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Department Head</h4>
                    <p className="text-[#3B82F6] font-medium">{dept.head}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities</h4>
                    <ul className="space-y-1">
                      {dept.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mr-2 flex-shrink-0"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-[#3B82F6]">{achievement.year}</Badge>
                        <Badge variant="outline">{achievement.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </div>
                    <Award className="w-6 h-6 text-[#3B82F6] flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-center">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Join Our Team</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Interested in making a difference in student life? We're always looking for 
                passionate students to join our organization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-4">
                Applications for new positions are open twice a year. Contact us to learn more about 
                opportunities to get involved and contribute to our mission.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}