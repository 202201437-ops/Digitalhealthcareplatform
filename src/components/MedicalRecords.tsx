import { useState } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, FileText, Download, Eye, Upload } from 'lucide-react';

type MedicalRecordsProps = {
  onBack: () => void;
};

const prescriptions = [
  {
    id: 1,
    doctor: 'Dr. Sarah Anderson',
    date: 'Nov 15, 2024',
    diagnosis: 'Hypertension',
    medications: ['Amlodipine 5mg', 'Atenolol 50mg']
  },
  {
    id: 2,
    doctor: 'Dr. Priya Sharma',
    date: 'Oct 28, 2024',
    diagnosis: 'Common Cold',
    medications: ['Paracetamol 500mg', 'Cetirizine 10mg']
  },
];

const reports = [
  {
    id: 1,
    name: 'Blood Test Report',
    date: 'Nov 10, 2024',
    type: 'Lab Report',
    size: '2.5 MB'
  },
  {
    id: 2,
    name: 'ECG Report',
    date: 'Nov 5, 2024',
    type: 'Diagnostic',
    size: '1.8 MB'
  },
  {
    id: 3,
    name: 'X-Ray Chest',
    date: 'Oct 20, 2024',
    type: 'Imaging',
    size: '3.2 MB'
  },
];

const history = [
  {
    id: 1,
    doctor: 'Dr. Sarah Anderson',
    specialty: 'Cardiologist',
    date: 'Nov 15, 2024',
    type: 'Video Consultation',
    status: 'Completed'
  },
  {
    id: 2,
    doctor: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    date: 'Nov 8, 2024',
    type: 'Clinic Visit',
    status: 'Completed'
  },
  {
    id: 3,
    doctor: 'Dr. Priya Sharma',
    specialty: 'Pediatrician',
    date: 'Oct 28, 2024',
    type: 'Video Consultation',
    status: 'Completed'
  },
];

export function MedicalRecords({ onBack }: MedicalRecordsProps) {
  const [activeTab, setActiveTab] = useState('prescriptions');

  return (
    <div className="min-h-screen bg-[#F7F9FC] pb-20">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-[#1A1A1A] flex-1">Medical Records</h2>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Upload className="w-5 h-5 text-[#3A8DFF]" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="px-6 py-6">
        <TabsList className="w-full bg-white rounded-2xl p-1 mb-6">
          <TabsTrigger 
            value="prescriptions" 
            className="flex-1 rounded-xl data-[state=active]:bg-[#3A8DFF] data-[state=active]:text-white"
          >
            Prescriptions
          </TabsTrigger>
          <TabsTrigger 
            value="reports"
            className="flex-1 rounded-xl data-[state=active]:bg-[#3A8DFF] data-[state=active]:text-white"
          >
            Reports
          </TabsTrigger>
          <TabsTrigger 
            value="history"
            className="flex-1 rounded-xl data-[state=active]:bg-[#3A8DFF] data-[state=active]:text-white"
          >
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="prescriptions" className="space-y-4 mt-0">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#E9F2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#3A8DFF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1A1A1A] mb-1">{prescription.doctor}</h3>
                  <p className="text-sm text-[#666]">{prescription.date}</p>
                  <div className="inline-block bg-[#E9F2FF] text-[#3A8DFF] text-xs px-3 py-1 rounded-full mt-2">
                    {prescription.diagnosis}
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F9FC] rounded-xl p-4 mb-4">
                <p className="text-sm text-[#666] mb-2">Medications</p>
                <ul className="space-y-1">
                  {prescription.medications.map((med, index) => (
                    <li key={index} className="text-[#1A1A1A] text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#3A8DFF] rounded-full"></div>
                      {med}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl border-[#E9F2FF]">
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button className="flex-1 bg-[#3A8DFF] hover:bg-[#2563EB] rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="reports" className="space-y-4 mt-0">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E9F2FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#3A8DFF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1A1A1A] mb-1">{report.name}</h3>
                  <p className="text-sm text-[#666] mb-2">{report.date}</p>
                  <div className="flex items-center gap-3 text-xs text-[#666]">
                    <span className="bg-[#F7F9FC] px-3 py-1 rounded-full">{report.type}</span>
                    <span>{report.size}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Eye className="w-5 h-5 text-[#3A8DFF]" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Download className="w-5 h-5 text-[#3A8DFF]" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <Button className="w-full h-14 bg-white border-2 border-dashed border-[#3A8DFF] text-[#3A8DFF] hover:bg-[#E9F2FF] rounded-2xl">
            <Upload className="w-5 h-5 mr-2" />
            Upload New Report
          </Button>
        </TabsContent>

        <TabsContent value="history" className="space-y-4 mt-0">
          {history.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[#1A1A1A] mb-1">{appointment.doctor}</h3>
                  <p className="text-sm text-[#666]">{appointment.specialty}</p>
                </div>
                <div className="bg-[#E5F5E5] text-[#2E7D32] text-xs px-3 py-1 rounded-full">
                  {appointment.status}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-[#666] mb-4">
                <span>{appointment.date}</span>
                <span>•</span>
                <span>{appointment.type}</span>
              </div>

              <Button 
                variant="outline" 
                className="w-full rounded-xl border-[#3A8DFF] text-[#3A8DFF] hover:bg-[#E9F2FF]"
              >
                View Details
              </Button>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
