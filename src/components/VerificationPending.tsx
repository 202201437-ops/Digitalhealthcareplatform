import { Button } from './ui/button';
import { Clock, FileText, CheckCircle, XCircle, Eye, Edit, LogOut } from 'lucide-react';

type VerificationPendingProps = {
  onViewStatus: () => void;
  onEditProfile: () => void;
  onLogout: () => void;
  onSimulateApproval?: () => void; // For demo purposes
};

const documents = [
  { name: 'Medical Degree', status: 'verified', icon: CheckCircle, color: '#2E7D32' },
  { name: 'Registration Certificate', status: 'pending', icon: Clock, color: '#FF9800' },
  { name: 'Identity Proof', status: 'verified', icon: CheckCircle, color: '#2E7D32' },
  { name: 'Clinic Address Proof', status: 'rejected', icon: XCircle, color: '#FF4444' },
];

export function VerificationPending({ onViewStatus, onEditProfile, onLogout, onSimulateApproval }: VerificationPendingProps) {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#3A8DFF] to-[#2563EB] px-6 pt-8 pb-24">
        <div className="flex justify-between mb-8">
          {/* Demo button for testing */}
          {onSimulateApproval && (
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 rounded-xl text-xs"
              onClick={onSimulateApproval}
            >
              ⚡ Simulate Approval
            </Button>
          )}
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 rounded-xl ml-auto"
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Clock className="w-10 h-10" />
          </div>
          <h1 className="mb-2">Verification in Progress</h1>
          <p className="text-white/90">
            Your documents are under review by our team
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-16">
        {/* Status Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[#1A1A1A]">Verification Status</h3>
            <div className="bg-[#FFF4E5] text-[#FF9800] text-sm px-4 py-1 rounded-full">
              In Review
            </div>
          </div>

          <div className="space-y-4">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 bg-[#F7F9FC] rounded-2xl">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${doc.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: doc.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#1A1A1A] text-sm">{doc.name}</h4>
                    <p 
                      className="text-xs capitalize mt-1"
                      style={{ color: doc.color }}
                    >
                      {doc.status}
                    </p>
                  </div>
                  {doc.status === 'rejected' && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-[#3A8DFF] hover:bg-[#E9F2FF] rounded-xl"
                      onClick={onEditProfile}
                    >
                      Re-upload
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-[#E9F2FF] rounded-2xl p-6 mb-6">
          <h4 className="text-[#3A8DFF] mb-2 flex items-center gap-2">
            <span>ℹ️</span>
            What happens next?
          </h4>
          <ul className="space-y-2 text-sm text-[#3A8DFF]">
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#3A8DFF] rounded-full mt-2 flex-shrink-0"></span>
              <span>Our team will review your documents within 24-48 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#3A8DFF] rounded-full mt-2 flex-shrink-0"></span>
              <span>You'll receive an email once verification is complete</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-[#3A8DFF] rounded-full mt-2 flex-shrink-0"></span>
              <span>After approval, you can start accepting appointments</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-3 mb-6">
          <Button
            onClick={onEditProfile}
            className="w-full h-12 bg-white border-2 border-[#3A8DFF] text-[#3A8DFF] hover:bg-[#E9F2FF] rounded-xl flex items-center justify-center gap-2"
          >
            <Edit className="w-5 h-5" />
            Edit Profile & Documents
          </Button>
          
          <Button
            onClick={onViewStatus}
            variant="outline"
            className="w-full h-12 rounded-xl border-[#E9F2FF] text-[#1A1A1A] hover:bg-[#F7F9FC] flex items-center justify-center gap-2"
          >
            <Eye className="w-5 h-5" />
            View Detailed Status
          </Button>
        </div>

        {/* Support Card */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <h4 className="text-[#1A1A1A] mb-3">Need Help?</h4>
          <p className="text-sm text-[#666] mb-4">
            Our support team is here to help you with the verification process
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 h-10 rounded-xl border-[#E9F2FF] text-[#3A8DFF]"
            >
              📧 Email Support
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-10 rounded-xl border-[#E9F2FF] text-[#3A8DFF]"
            >
              💬 Live Chat
            </Button>
          </div>
        </div>

        {/* Estimated Time */}
        <div className="text-center pb-8">
          <p className="text-sm text-[#666]">
            Estimated verification time: <span className="text-[#3A8DFF]">24-48 hours</span>
          </p>
        </div>
      </div>
    </div>
  );
}