import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, MapPin, Calendar, Award, Users, Target } from 'lucide-react';

export default function ProfilePage() {
  const officers = [
    {
      name: "Sarah Johnson",
      position: "President",
      department: "Computer Science",
      year: "3rd Year",
      email: "sarah.johnson@university.edu",
      phone: "+62 123 456 789",
      image: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Michael Chen",
      position: "Vice President",
      department: "Business Administration",
      year: "3rd Year", 
      email: "michael.chen@university.edu",
      phone: "+62 123 456 790",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      position: "Secretary General",
      department: "Communications",
      year: "2nd Year",
      email: "emily.rodriguez@university.edu", 
      phone: "+62 123 456 791",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "David Kim",
      position: "Treasurer",
      department: "Accounting",
      year: "3rd Year",
      email: "david.kim@university.edu",
      phone: "+62 123 456 792", 
      image: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Executive Board Profiles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team of student leaders working to represent your interests 
            and improve campus life for everyone.
          </p>
        </div>

        {/* Leadership Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
              <CardTitle>Student Representation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advocating for student rights and interests across all academic and social aspects of university life.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
              <CardTitle>Strategic Leadership</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Developing and implementing strategic initiatives to enhance the overall student experience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
              <CardTitle>Excellence Achievement</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Promoting academic excellence and personal development through various programs and initiatives.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {officers.map((officer, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{officer.name}</CardTitle>
                    <Badge className="bg-[#3B82F6] mb-2">{officer.position}</Badge>
                    <div className="text-sm text-gray-600">
                      {officer.department} • {officer.year}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-[#3B82F6]" />
                  <span className="text-sm">{officer.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-[#3B82F6]" />
                  <span className="text-sm">{officer.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-3 text-[#3B82F6]" />
                  <span className="text-sm">Student Council Office</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-3 text-[#3B82F6]" />
                  <span className="text-sm">Office Hours: Mon-Fri 9AM-5PM</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Get in Touch</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Have questions or suggestions? Our executive board is here to help and listen to your concerns.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Mail className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-white/90">bem@university.edu</p>
                </div>
                <div>
                  <Phone className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-white/90">+62 123 456 789</p>
                </div>
                <div>
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-white/90">Student Council Office, Building A</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}