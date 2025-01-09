import { TrendingUp, Users, Building2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Simple Card components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const satisfactionData = [
  { category: 'Very satisfied', value: 35 },
  { category: 'Satisfied', value: 47 },
  { category: 'Neutral', value: 13 },
  { category: 'Unsatisfied', value: 5 },
  { category: 'Very unsatisfied', value: 0 }
];

function App() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">SCIH Staff Survey 2024 Highlights</h1>

      {/* Podcast Section - Now First */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Survey Insights Podcast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-lg">
            <audio 
              controls 
              className="w-full"
            >
              <source src="/Swiss TPH Staff Survey 2024_ Key Findings and Recommendations.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-sm text-gray-600 mt-2">
              Listen to our detailed analysis of the 2024 Swiss TPH staff survey results and recommendations
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56%</div>
            <p className="text-xs text-gray-500 mt-1">
              Basel: 73% | Abroad: 48%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Overall Satisfaction</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-gray-500 mt-1">
              Satisfied or Very Satisfied (↑5% from 2023)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Strategy Satisfaction</CardTitle>
            <Building2 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">61%</div>
            <p className="text-xs text-gray-500 mt-1">
              Satisfied with TPH Strategy 2025-2028
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card className="mt-6 w-full">
        <CardHeader>
          <CardTitle>Overall Satisfaction Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
              <BarChart data={satisfactionData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="category" 
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" name="Percentage" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Key Findings Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Concerns</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                High workload and time pressure
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Employment conditions (salary, benefits)
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Workplace insecurity
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Communication across units
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Recognition of local offices
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Positive Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                30% specifically praised leadership commitment
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                High satisfaction with PAU support
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Increased participation from staff abroad
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Positive reception of TPH strategy
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;