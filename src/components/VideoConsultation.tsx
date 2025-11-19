import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Phone, 
  MessageSquare, 
  Paperclip,
  X,
  Send
} from 'lucide-react';
import type { Doctor } from '../App';

type VideoConsultationProps = {
  doctor: Doctor;
  onEnd: () => void;
};

export function VideoConsultation({ doctor, onEnd }: VideoConsultationProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'doctor' | 'patient'; time: string }>>([
    { text: 'Hello! How can I help you today?', sender: 'doctor', time: '10:00 AM' }
  ]);
  const [timer, setTimer] = useState(0);

  // Timer effect
  useState(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        text: message,
        sender: 'patient',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage('');
    }
  };

  return (
    <div className="h-screen bg-[#1A1A1A] flex flex-col relative">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/50 to-transparent z-10">
        <div className="flex items-center justify-between text-white">
          <div>
            <h3>{doctor.name}</h3>
            <p className="text-sm opacity-80">{doctor.specialty}</p>
          </div>
          <div className="bg-[#FF4444] px-3 py-1 rounded-full text-sm">
            {formatTime(timer)}
          </div>
        </div>
      </div>

      {/* Video Area */}
      <div className="flex-1 relative">
        {/* Doctor Video (Main) */}
        <div className="w-full h-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] flex items-center justify-center">
          <div className="text-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
            />
            <p className="text-white text-xl">{doctor.name}</p>
            <p className="text-white/80">Video Call in Progress</p>
          </div>
        </div>

        {/* Patient Video (PiP) */}
        <div className="absolute top-20 right-6 w-32 h-40 bg-gradient-to-br from-[#3A8DFF] to-[#2563EB] rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
          <div className="w-full h-full flex items-center justify-center">
            {isVideoOff ? (
              <div className="text-white text-center">
                <VideoOff className="w-8 h-8 mx-auto mb-2" />
                <p className="text-xs">Camera Off</p>
              </div>
            ) : (
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <p className="text-xs">You</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Sidebar */}
      {isChatOpen && (
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col z-20">
          <div className="bg-[#3A8DFF] px-6 py-4 flex items-center justify-between">
            <h3 className="text-white">Chat</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
              onClick={() => setIsChatOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    msg.sender === 'patient'
                      ? 'bg-[#3A8DFF] text-white'
                      : 'bg-[#F7F9FC] text-[#1A1A1A]'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'patient' ? 'text-white/70' : 'text-[#666]'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-[#E9F2FF]">
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Paperclip className="w-5 h-5" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 rounded-xl border-[#E9F2FF]"
              />
              <Button
                size="icon"
                className="bg-[#3A8DFF] hover:bg-[#2563EB] rounded-full"
                onClick={handleSendMessage}
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            className={`w-14 h-14 rounded-full ${
              isMuted ? 'bg-[#FF4444] hover:bg-[#FF4444]/90' : 'bg-white/20 hover:bg-white/30'
            } text-white`}
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className={`w-14 h-14 rounded-full ${
              isVideoOff ? 'bg-[#FF4444] hover:bg-[#FF4444]/90' : 'bg-white/20 hover:bg-white/30'
            } text-white`}
            onClick={() => setIsVideoOff(!isVideoOff)}
          >
            {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
          </Button>

          <Button
            size="icon"
            className="w-16 h-16 rounded-full bg-[#FF4444] hover:bg-[#FF4444]/90"
            onClick={onEnd}
          >
            <Phone className="w-6 h-6 rotate-[135deg]" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className={`w-14 h-14 rounded-full ${
              isChatOpen ? 'bg-[#3A8DFF]' : 'bg-white/20'
            } hover:bg-white/30 text-white relative`}
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <MessageSquare className="w-6 h-6" />
            {messages.length > 1 && !isChatOpen && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF4444] rounded-full text-xs flex items-center justify-center">
                {messages.length - 1}
              </span>
            )}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 text-white"
          >
            <Paperclip className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
