import React, { useState } from 'react';
import { User, Book, Users, Globe, Award, Plus, Search, MessageCircle, Calendar } from 'lucide-react';

export default function FamilyHistoryApp() {
  const [currentView, setCurrentView] = useState('profile');
  const [userProfile] = useState({
    name: 'Sarah Mitchell',
    lastName: 'Mitchell',
    origins: ['Scotland', 'Ireland', 'England'],
    generation: 4
  });
  
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Friday');
  const [attendingEvents, setAttendingEvents] = useState([]);

  const [stamps, setStamps] = useState([
    { id: 1, name: 'James Chen', origin: 'China', connection: 'Direct - 18th century trade route' },
    { id: 2, name: 'Maria Garcia', origin: 'Spain', connection: 'Indirect - Scottish-Spanish alliance 1600s' },
    { id: 3, name: "David O'Brien", origin: 'Ireland', connection: "Possible relative - O'Brien clan" }
  ]);

  const [connections, setConnections] = useState([
    { type: 'Direct Relative', name: "David O'Brien", relation: '5th cousin', confidence: 'High' },
    { type: 'Regional Link', name: 'James Chen', relation: 'Trade connections', confidence: 'Medium' },
    { type: 'Historical Link', name: 'Maria Garcia', relation: 'Alliance period', confidence: 'Low' }
  ]);

  const [sharedInterests] = useState([
    { category: 'Research Focus', interest: 'Military History', matches: 12 },
    { category: 'Time Period', interest: '1800s Immigration', matches: 8 },
    { category: 'Region', interest: 'Celtic Heritage', matches: 15 }
  ]);

  const newStampOptions = [
    { id: 4, name: 'Emma Johnson', origin: 'England', connection: 'Shared ancestor - William Johnson 1750s', discoveryType: 'Direct Relative', discoveryRelation: '6th cousin', discoveryConfidence: 'High' },
    { id: 5, name: 'Carlos Rivera', origin: 'Mexico', connection: 'Regional link - Spanish colonial period', discoveryType: 'Regional Link', discoveryRelation: 'Spanish colonial connections', discoveryConfidence: 'Medium' },
    { id: 6, name: 'Yuki Tanaka', origin: 'Japan', connection: 'Cultural exchange - shared immigration era', discoveryType: 'Historical Link', discoveryRelation: 'Immigration period 1900s', discoveryConfidence: 'Low' },
    { id: 7, name: 'Fatima Hassan', origin: 'Egypt', connection: 'Historical link - ancient trade routes', discoveryType: 'Historical Link', discoveryRelation: 'Ancient trade connections', discoveryConfidence: 'Low' }
  ];

  const fullSchedule = [
    { day: 'Friday', time: '9:00 AM - 10:00 AM', title: 'Opening Keynote: Your Story Matters', speaker: 'Elder James R. Martinez', room: 'Main Hall', category: 'keynote' },
    { day: 'Friday', time: '10:15 AM - 11:15 AM', title: 'Temple Work 101: Finding Names for the Temple', speaker: 'Sister Rachel Thompson', room: 'Room 101', category: 'temple' },
    { day: 'Friday', time: '10:15 AM - 11:15 AM', title: 'DNA & You: Understanding Your Genetic Heritage', speaker: 'Dr. Sarah Chen', room: 'Room 204', category: 'dna' },
    { day: 'Friday', time: '10:15 AM - 11:15 AM', title: 'Social Media for Family History', speaker: 'Marcus Williams', room: 'Room 305', category: 'tech' },
    { day: 'Friday', time: '11:30 AM - 12:30 PM', title: 'Breaking Barriers: Adoption & Unknown Origins', speaker: 'Emily Rodriguez', room: 'Room 102', category: 'support' },
    { day: 'Friday', time: '11:30 AM - 12:30 PM', title: "Discovering Your Roots: A Beginner's Guide", speaker: 'Michael Torres', room: 'Main Hall', category: 'beginner' },
    { day: 'Friday', time: '11:30 AM - 12:30 PM', title: 'Temple Covenant Connections', speaker: 'Brother David Park', room: 'Chapel', category: 'temple' },
    { day: 'Friday', time: '12:30 PM - 1:30 PM', title: 'Lunch & Networking', speaker: '', room: 'Cafeteria', category: 'break' },
    { day: 'Friday', time: '1:30 PM - 2:30 PM', title: "Immigration Stories: Honoring Your Ancestors' Journey", speaker: 'Professor Ana Garcia', room: 'Room 201', category: 'stories' },
    { day: 'Friday', time: '1:30 PM - 2:30 PM', title: 'FamilySearch Tips & Tricks for YSAs', speaker: 'Jordan Lee', room: 'Room 305', category: 'tech' },
    { day: 'Friday', time: '1:30 PM - 2:30 PM', title: 'Career Skills: Monetizing Your Heritage Research', speaker: 'Business Panel', room: 'Room 102', category: 'career' },
    { day: 'Friday', time: '2:45 PM - 3:45 PM', title: "Your Ancestors' Hidden Talents", speaker: 'Dr. Rebecca Martinez', room: 'Room 102', category: 'stories' },
    { day: 'Friday', time: '2:45 PM - 3:45 PM', title: 'Preparing for Your First Temple Experience', speaker: 'Brother Thomas Anderson', room: 'Room 101', category: 'temple' },
    { day: 'Friday', time: '2:45 PM - 3:45 PM', title: 'DNA Analysis Workshop', speaker: 'Dr. Sarah Chen', room: 'Room 204', category: 'dna' },
    { day: 'Friday', time: '4:00 PM - 5:00 PM', title: 'Panel: Why Family History Matters to Our Generation', speaker: 'YSA Panel', room: 'Main Hall', category: 'keynote' },
    { day: 'Friday', time: '5:15 PM - 6:15 PM', title: 'Indexing Party: Making History Accessible', speaker: 'Community Leaders', room: 'Room 305', category: 'service' },
    { day: 'Friday', time: '6:30 PM - 8:00 PM', title: 'Dinner Break', speaker: '', room: 'Various Locations', category: 'break' },
    { day: 'Friday', time: '8:00 PM - 10:00 PM', title: '🎤 LIVE CONCERT: The Piano Guys', speaker: 'Special Performance', room: 'Conference Center', category: 'concert' },
    { day: 'Friday', time: '10:15 PM - 12:00 AM', title: '💃 Opening Night Dance: Throwback Hits', speaker: 'DJ Mike Rodriguez', room: 'Grand Ballroom', category: 'dance' },
    
    { day: 'Saturday', time: '7:00 AM - 9:15 AM', title: '⛪ Temple Session - Group 1', speaker: 'Endowment Session', room: 'Salt Lake Temple', category: 'temple' },
    { day: 'Saturday', time: '8:00 AM - 10:15 AM', title: '⛪ Temple Session - Group 2', speaker: 'Endowment Session', room: 'Salt Lake Temple', category: 'temple' },
    { day: 'Saturday', time: '9:00 AM - 11:15 AM', title: '⛪ Temple Session - Group 3', speaker: 'Endowment Session', room: 'Salt Lake Temple', category: 'temple' },
    { day: 'Saturday', time: '9:00 AM - 10:00 AM', title: 'Morning Devotional & Breakfast', speaker: 'Sister Maria Santos', room: 'Main Hall', category: 'spiritual' },
    { day: 'Saturday', time: '10:15 AM - 12:30 PM', title: '⛪ Temple Session - Group 4', speaker: 'Endowment Session', room: 'Salt Lake Temple', category: 'temple' },
    { day: 'Saturday', time: '10:30 AM - 11:30 AM', title: 'Preserving Family Stories Through Video', speaker: 'Sarah Kim', room: 'Media Lab', category: 'tech' },
    { day: 'Saturday', time: '10:30 AM - 11:30 AM', title: 'Breaking Through Brick Walls in Research', speaker: 'Professor James Wilson', room: 'Room 201', category: 'beginner' },
    { day: 'Saturday', time: '10:30 AM - 11:30 AM', title: 'Finding Joy in Temple Service', speaker: 'Brother Marcus Lee', room: 'Chapel', category: 'temple' },
    { day: 'Saturday', time: '11:45 AM - 12:45 PM', title: 'Building Your Brand: Family History as a Career', speaker: 'Entrepreneur Panel', room: 'Room 102', category: 'career' },
    { day: 'Saturday', time: '11:45 AM - 12:45 PM', title: 'Your Patriarchal Blessing & Family History', speaker: 'Elder Robert Chen', room: 'Main Hall', category: 'spiritual' },
    { day: 'Saturday', time: '11:45 AM - 12:45 PM', title: 'Military Ancestors: Stories of Courage', speaker: 'Colonel (Ret.) David Martinez', room: 'Room 204', category: 'stories' },
    { day: 'Saturday', time: '12:45 PM - 2:00 PM', title: 'Lunch & Temple Square Tour', speaker: '', room: 'Temple Square', category: 'break' },
    { day: 'Saturday', time: '1:00 PM - 3:15 PM', title: '⛪ Temple Session - Group 5', speaker: 'Endowment Session', room: 'Salt Lake Temple', category: 'temple' },
    { day: 'Saturday', time: '2:00 PM - 3:00 PM', title: 'Pioneer Stories: Then & Now', speaker: 'Dr. Elizabeth Young', room: 'Room 201', category: 'stories' },
    { day: 'Saturday', time: '2:00 PM - 3:00 PM', title: 'Creating Your Own Family History Podcast', speaker: 'Alex Thompson', room: 'Media Lab', category: 'tech' },
    { day: 'Saturday', time: '2:00 PM - 3:00 PM', title: 'The Power of Family Names in the Temple', speaker: 'Sister Hannah Park', room: 'Chapel', category: 'temple' },
    { day: 'Saturday', time: '3:15 PM - 4:15 PM', title: 'International Roots: Connecting Across Borders', speaker: 'Multi-cultural Panel', room: 'Main Hall', category: 'keynote' },
    { day: 'Saturday', time: '3:15 PM - 4:15 PM', title: 'Starting Your Temple Prep Journey', speaker: 'Brother Tim Williams', room: 'Room 101', category: 'temple' },
    { day: 'Saturday', time: '3:15 PM - 5:30 PM', title: '⛪ Temple Session - Group 6', speaker: 'Endowment Session', room: 'Salt Lake Temple', category: 'temple' },
    { day: 'Saturday', time: '4:30 PM - 5:30 PM', title: 'Family History Game Show Challenge', speaker: 'YSA Leaders', room: 'Grand Ballroom', category: 'activity' },
    { day: 'Saturday', time: '5:45 PM - 7:15 PM', title: '🎭 YSA TALENT SHOW: Share Your Story & Skills!', speaker: 'Open Mic - All Welcome!', room: 'Main Hall', category: 'talent' },
    { day: 'Saturday', time: '7:30 PM - 9:00 PM', title: '🎤 LIVE CONCERT: Lindsey Stirling', speaker: 'Special Performance', room: 'Conference Center', category: 'concert' },
    { day: 'Saturday', time: '9:15 PM - 10:15 PM', title: '✨ EPIC DRONE SHOW: Pioneer Heritage Story', speaker: '500 Drones Over Temple Square', room: 'Temple Square', category: 'special' },
    { day: 'Saturday', time: '10:30 PM - 1:00 AM', title: '💃 Saturday Night Dance: EDM & Pop Hits', speaker: 'DJ Sarah Chen', room: 'Grand Ballroom', category: 'dance' },
    
    { day: 'Sunday', time: '9:00 AM - 10:00 AM', title: 'Sabbath Sacrament Meeting', speaker: 'Elder Martinez & Special Guests', room: 'Conference Center', category: 'spiritual' },
    { day: 'Sunday', time: '10:15 AM - 11:15 AM', title: 'Sunday School: Elijah & Turning Hearts', speaker: 'Brother James Wilson', room: 'Main Hall', category: 'spiritual' },
    { day: 'Sunday', time: '11:30 AM - 12:30 PM', title: 'Combined Priesthood & Relief Society', speaker: 'Sister Emily Rodriguez', room: 'Main Hall', category: 'spiritual' },
    { day: 'Sunday', time: '12:30 PM - 2:00 PM', title: 'Sunday Dinner', speaker: '', room: 'Cafeteria', category: 'break' },
    { day: 'Sunday', time: '2:00 PM - 3:30 PM', title: 'Temple Walk & Reflection Time', speaker: '', room: 'Temple Square', category: 'spiritual' },
    { day: 'Sunday', time: '4:00 PM - 5:30 PM', title: '🎤 Inspirational Fireside: Lexi Walker & Friends', speaker: 'Musical Fireside', room: 'Conference Center', category: 'concert' },
    { day: 'Sunday', time: '6:00 PM - 7:00 PM', title: 'Closing Testimony Meeting: Share Your Story', speaker: 'All Attendees', room: 'Main Hall', category: 'spiritual' }
  ];

  const toggleAttending = (sessionTitle) => {
    if (attendingEvents.includes(sessionTitle)) {
      setAttendingEvents(attendingEvents.filter(e => e !== sessionTitle));
    } else {
      setAttendingEvents([...attendingEvents, sessionTitle]);
    }
  };

  const simulateConnection = async () => {
    setIsConnecting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const randomStamp = newStampOptions[Math.floor(Math.random() * newStampOptions.length)];
    
    if (!stamps.find(s => s.id === randomStamp.id)) {
      setStamps([...stamps, randomStamp]);
      const newConnection = {
        type: randomStamp.discoveryType,
        name: randomStamp.name,
        relation: randomStamp.discoveryRelation,
        confidence: randomStamp.discoveryConfidence
      };
      setConnections([...connections, newConnection]);
    }
    
    setIsConnecting(false);
  };

  const simulateSearch = async (lastName) => {
    setIsSearching(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSearchResults({
      surname: lastName,
      origins: ['Scotland (Highland region)', 'Northern England', 'Ulster, Ireland'],
      meaning: 'Derived from Michael, meaning "Who is like God"',
      history: 'The Mitchell surname emerged in Scotland during the 13th century. Many Mitchells were involved in border conflicts and later migrated during the Highland Clearances.',
      famousIndividuals: ['Joni Mitchell - Musician', 'Margaret Mitchell - Author', 'George Mitchell - Diplomat'],
      migration: ['Scotland → Northern Ireland (1600s)', 'Ireland → North America (1700s-1800s)', 'England → Australia (1800s)'],
      dnaRegions: ['Celtic - 45%', 'Scandinavian - 30%', 'Anglo-Saxon - 25%']
    });
    
    setIsSearching(false);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-400 via-pink-300 to-rose-300 text-white p-4 rounded-t-3xl shadow-lg overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='white'%3E%3Crect x='85' y='60' width='30' height='80'/%3E%3Crect x='50' y='80' width='25' height='60'/%3E%3Crect x='125' y='80' width='25' height='60'/%3E%3Cpolygon points='100,20 85,60 115,60'/%3E%3Cpolygon points='62.5,65 50,80 75,80'/%3E%3Cpolygon points='137.5,65 125,80 150,80'/%3E%3Ccircle cx='100' cy='25' r='5'/%3E%3Ccircle cx='62.5' cy='70' r='3'/%3E%3Ccircle cx='137.5' cy='70' r='3'/%3E%3Crect x='90' y='100' width='20' height='30'/%3E%3Crect x='55' y='110' width='15' height='20'/%3E%3Crect x='130' y='110' width='15' height='20'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>What's Your Story</h1>
          <p className="text-center text-purple-50 text-sm mt-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>YSA Conference 2027</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="mt-4">
        {/* Profile View */}
        {currentView === 'profile' && (
          <div className="p-6 pb-24">
            <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 rounded-3xl p-6 shadow-lg mb-6">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg border-4 border-purple-200 flex items-center justify-center">
                  <User size={40} className="text-purple-400" />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-800">{userProfile.name}</h2>
                  <p className="text-gray-600">Generation {userProfile.generation}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
              <div className="flex items-center mb-4">
                <Globe className="text-purple-500 mr-2" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Your Heritage</h3>
              </div>
              <p className="text-gray-600 mb-4">Surname: <span className="font-semibold text-gray-800">{userProfile.lastName}</span></p>
              
              <div className="space-y-3">
                {userProfile.origins.map((origin, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 border-l-4 border-purple-400">
                    <p className="font-semibold text-gray-800">{origin}</p>
                    <p className="text-sm text-gray-600">Regional origin detected</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About Your Surname</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The surname <span className="font-bold">Mitchell</span> has strong Scottish and English roots, 
                derived from the medieval given name "Michel" (Michael). It became particularly prominent 
                in the Scottish Borders region during the 13th-16th centuries.
              </p>
              <button 
                onClick={() => {
                  setShowSearch(true);
                  simulateSearch(userProfile.lastName);
                }}
                className="w-full mt-4 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-xl p-3 font-semibold hover:shadow-lg transition-shadow"
              >
                🔍 Deep Dive: Research My Lineage
              </button>
            </div>
          </div>
        )}

        {/* Passport View */}
        {currentView === 'passport' && (
          <div className="p-6 pb-24">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 shadow-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Award className="text-purple-500 mr-2" size={28} />
                  <h2 className="text-2xl font-bold text-gray-800">My Passport</h2>
                </div>
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md">
                  {stamps.length}
                </div>
              </div>
              <p className="text-gray-600">Tap phones to exchange stamps!</p>
            </div>

            <button 
              onClick={simulateConnection}
              disabled={isConnecting}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow disabled:opacity-70"
            >
              {isConnecting ? (
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mb-2"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award size={32} className="text-white animate-pulse" />
                    </div>
                  </div>
                  <span className="text-lg font-semibold">Connecting...</span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center">
                    <Plus size={32} className="mr-2" />
                    <span className="text-xl font-semibold">Tap to Connect</span>
                  </div>
                  <p className="text-purple-50 text-sm mt-2">Hold phones together to exchange stamps</p>
                </div>
              )}
            </button>

            <h3 className="text-lg font-bold text-gray-800 mb-4">Collected Stamps ({stamps.length})</h3>
            <div className="space-y-4">
              {stamps.map((stamp) => (
                <div key={stamp.id} className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-purple-400">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-lg">{stamp.name}</h4>
                      <div className="flex items-center mt-1">
                        <Globe size={14} className="text-purple-500 mr-1" />
                        <p className="text-gray-600 text-sm">{stamp.origin}</p>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 shadow-md border-2 border-purple-300 flex items-center justify-center flex-shrink-0">
                      <User size={32} className="text-purple-500" />
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-3 mt-3">
                    <p className="text-xs text-gray-600 font-semibold mb-1">Connection:</p>
                    <p className="text-sm text-gray-700">{stamp.connection}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Connections View */}
        {currentView === 'connections' && (
          <div className="p-6 pb-24">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-6 shadow-lg mb-6">
              <div className="flex items-center mb-2">
                <Users className="text-teal-600 mr-2" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Discoveries</h2>
              </div>
              <p className="text-gray-600">Relationships found through collected stamps</p>
            </div>

            <div className="space-y-4">
              {connections.map((conn, idx) => {
                const colors = {
                  'Direct Relative': 'from-pink-400 to-rose-400',
                  'Regional Link': 'from-blue-400 to-cyan-400',
                  'Historical Link': 'from-green-400 to-teal-400'
                };
                const bgColors = {
                  'Direct Relative': 'from-pink-100 to-rose-100',
                  'Regional Link': 'from-blue-100 to-cyan-100',
                  'Historical Link': 'from-green-100 to-teal-100'
                };
                
                return (
                  <div key={idx} className={`bg-gradient-to-br ${bgColors[conn.type]} rounded-2xl p-5 shadow-md`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <span className={`inline-block bg-gradient-to-r ${colors[conn.type]} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                          {conn.type}
                        </span>
                        <h4 className="font-bold text-gray-800 text-lg">{conn.name}</h4>
                        <p className="text-gray-700 mt-1">{conn.relation}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                      <span className="text-xs text-gray-600">Confidence Level:</span>
                      <span className={`text-sm font-semibold ${
                        conn.confidence === 'High' ? 'text-green-600' : 
                        conn.confidence === 'Medium' ? 'text-blue-500' : 'text-gray-600'
                      }`}>
                        {conn.confidence}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-5 shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🤝</span>
                Shared Interests
              </h3>
              <p className="text-sm text-gray-600 mb-4">Find others researching similar topics</p>
              {sharedInterests.map((interest, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{interest.category}</p>
                      <p className="font-semibold text-gray-800 mt-1">{interest.interest}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-sm">
                        {interest.matches}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">matches</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-pink-100 border-l-4 border-pink-400 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">💡 Tip:</span> Collect more stamps to discover additional connections and potential relatives!
              </p>
            </div>
          </div>
        )}

        {/* Schedule View */}
        {currentView === 'schedule' && (
          <div className="p-6 pb-24">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-6 shadow-lg mb-6">
              <div className="flex items-center mb-2">
                <Calendar className="text-indigo-600 mr-2" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Conference Schedule</h2>
              </div>
              <p className="text-gray-600">Select events you plan to attend</p>
            </div>

            <div className="flex gap-2 mb-6">
              {['Friday', 'Saturday', 'Sunday'].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {fullSchedule.filter(session => session.day === selectedDay).map((session, idx) => {
                const isAttending = attendingEvents.includes(session.title);
                const categoryColors = {
                  keynote: 'from-purple-100 to-pink-100 border-purple-400',
                  temple: 'from-blue-100 to-cyan-100 border-blue-400',
                  dna: 'from-green-100 to-teal-100 border-green-400',
                  tech: 'from-indigo-100 to-purple-100 border-indigo-400',
                  support: 'from-rose-100 to-pink-100 border-rose-400',
                  beginner: 'from-amber-100 to-orange-100 border-amber-400',
                  stories: 'from-pink-100 to-rose-100 border-pink-400',
                  break: 'from-gray-100 to-gray-200 border-gray-400',
                  service: 'from-teal-100 to-cyan-100 border-teal-400',
                  spiritual: 'from-purple-100 to-indigo-100 border-purple-500',
                  concert: 'from-rose-200 to-pink-200 border-rose-500',
                  dance: 'from-fuchsia-200 to-purple-200 border-fuchsia-500',
                  special: 'from-yellow-200 to-orange-200 border-yellow-500',
                  activity: 'from-cyan-100 to-blue-100 border-cyan-400',
                  career: 'from-orange-100 to-amber-100 border-orange-400',
                  talent: 'from-violet-200 to-fuchsia-200 border-violet-500'
                };
                
                return (
                  <div 
                    key={idx} 
                    className={`bg-gradient-to-r ${categoryColors[session.category]} rounded-xl p-4 border-l-4 shadow-sm relative ${
                      isAttending ? 'ring-2 ring-purple-500' : ''
                    }`}
                  >
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">{session.time}</p>
                    <p className="font-bold text-gray-800 mt-1 text-base pr-12">{session.title}</p>
                    {session.speaker && (
                      <p className="text-sm text-gray-700 mt-1">👤 {session.speaker}</p>
                    )}
                    <p className="text-sm text-gray-600 mt-1">📍 {session.room}</p>
                    
                    <button
                      onClick={() => toggleAttending(session.title)}
                      className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isAttending
                          ? 'bg-purple-500 text-white shadow-md'
                          : 'bg-white text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {isAttending ? '✓' : '+'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-indigo-50 border-l-4 border-indigo-400 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">📊 Tracking:</span> Your selections help us plan future conferences! You're attending {attendingEvents.length} events.
              </p>
            </div>
          </div>
        )}

        {/* Discover View */}
        {currentView === 'discover' && (
          <div className="p-6 pb-24">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-6 shadow-lg mb-6">
              <div className="flex items-center mb-2">
                <Search className="text-teal-600 mr-2" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Discover</h2>
              </div>
              <p className="text-gray-600">Tools to help everyone connect</p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-md mb-4">
              <div className="flex items-center mb-3">
                <MessageCircle className="text-blue-400 mr-2" size={22} />
                <h3 className="font-bold text-gray-800 text-lg">Join a Discussion</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Connect with others researching similar topics</p>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-800">Adoption & Unknown Origins</p>
                      <p className="text-xs text-gray-600 mt-1">Safe space for those with limited family info</p>
                    </div>
                    <span className="bg-blue-400 text-white text-xs px-2 py-1 rounded-full">23</span>
                  </div>
                  <button className="text-blue-500 text-sm font-semibold mt-2">Join Group →</button>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-800">Breaking Through Brick Walls</p>
                      <p className="text-xs text-gray-600 mt-1">Tips for finding elusive ancestors</p>
                    </div>
                    <span className="bg-green-400 text-white text-xs px-2 py-1 rounded-full">45</span>
                  </div>
                  <button className="text-green-500 text-sm font-semibold mt-2">Join Group →</button>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-800">Immigration Stories</p>
                      <p className="text-xs text-gray-600 mt-1">Share your family's journey</p>
                    </div>
                    <span className="bg-purple-400 text-white text-xs px-2 py-1 rounded-full">37</span>
                  </div>
                  <button className="text-purple-500 text-sm font-semibold mt-2">Join Group →</button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-5 shadow-md mb-4">
              <h3 className="font-bold text-gray-800 text-lg mb-2">🌟 Start With What You Know</h3>
              <p className="text-sm text-gray-600 mb-4">Don't know much about your family? Here are ways to begin your journey:</p>
              <div className="space-y-2">
                <div className="bg-white rounded-xl p-3 text-sm text-gray-700">
                  ✓ Search records by your birth location
                </div>
                <div className="bg-white rounded-xl p-3 text-sm text-gray-700">
                  ✓ Explore DNA matches and ethnic regions
                </div>
                <div className="bg-white rounded-xl p-3 text-sm text-gray-700">
                  ✓ Connect with others from your region
                </div>
                <div className="bg-white rounded-xl p-3 text-sm text-gray-700">
                  ✓ Learn about surname patterns and meanings
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-5 shadow-md">
              <h3 className="font-bold text-gray-800 text-lg mb-2">💬 Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with genealogy experts who can guide your research</p>
              <button className="w-full bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-xl p-3 font-semibold shadow-sm">
                Request Expert Consultation
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-purple-100 flex justify-around p-3 rounded-t-3xl shadow-lg">
        <button
          onClick={() => setCurrentView('profile')}
          className={`flex flex-col items-center ${currentView === 'profile' ? 'text-purple-500' : 'text-gray-400'}`}
        >
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </button>
        <button
          onClick={() => setCurrentView('passport')}
          className={`flex flex-col items-center ${currentView === 'passport' ? 'text-purple-500' : 'text-gray-400'}`}
        >
          <Book size={20} />
          <span className="text-xs mt-1">Passport</span>
        </button>
        <button
          onClick={() => setCurrentView('connections')}
          className={`flex flex-col items-center ${currentView === 'connections' ? 'text-purple-500' : 'text-gray-400'}`}
        >
          <Users size={20} />
          <span className="text-xs mt-1">Connect</span>
        </button>
        <button
          onClick={() => setCurrentView('schedule')}
          className={`flex flex-col items-center ${currentView === 'schedule' ? 'text-purple-500' : 'text-gray-400'}`}
        >
          <Calendar size={20} />
          <span className="text-xs mt-1">Schedule</span>
        </button>
        <button
          onClick={() => setCurrentView('discover')}
          className={`flex flex-col items-center ${currentView === 'discover' ? 'text-purple-500' : 'text-gray-400'}`}
        >
          <Globe size={20} />
          <span className="text-xs mt-1">Discover</span>
        </button>
      </div>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowSearch(false)}>
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 text-white p-6 rounded-t-3xl flex-shrink-0">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Lineage Research</h2>
                <button 
                  onClick={() => setShowSearch(false)} 
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors text-2xl w-10 h-10 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto flex-1">
              {isSearching ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-400 mx-auto mb-4"></div>
                  <p className="text-gray-600 font-semibold">Searching historical records...</p>
                  <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
                </div>
              ) : searchResults ? (
                <div className="p-6 space-y-4">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-5">
                    <h3 className="font-bold text-gray-800 text-xl mb-2">{searchResults.surname}</h3>
                    <p className="text-gray-600 text-sm italic mb-3">{searchResults.meaning}</p>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm text-gray-700 leading-relaxed">{searchResults.history}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Globe className="mr-2 text-blue-400" size={20} />
                      Geographic Origins
                    </h4>
                    {searchResults.origins.map((origin, idx) => (
                      <div key={idx} className="bg-blue-100 rounded-xl p-3 mb-2">
                        <p className="text-sm text-gray-700">📍 {origin}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-3">Migration Patterns</h4>
                    {searchResults.migration.map((pattern, idx) => (
                      <div key={idx} className="flex items-center mb-2">
                        <div className="bg-green-100 text-green-600 rounded-lg px-3 py-2 text-sm">
                          {pattern}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-5">
                    <h4 className="font-bold text-gray-800 mb-3">Typical DNA Composition</h4>
                    {searchResults.dnaRegions.map((region, idx) => (
                      <div key={idx} className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{region.split(' - ')[0]}</span>
                          <span className="font-semibold text-purple-600">{region.split(' - ')[1]}</span>
                        </div>
                        <div className="bg-white rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-purple-400 to-pink-400 h-full"
                            style={{width: region.split(' - ')[1]}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <h4 className="font-bold text-gray-800 mb-3">Notable People with This Surname</h4>
                    {searchResults.famousIndividuals.map((person, idx) => (
                      <div key={idx} className="bg-pink-100 rounded-xl p-3 mb-2">
                        <p className="text-sm text-gray-700">⭐ {person}</p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setShowSearch(false)}
                    className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl p-4 font-semibold shadow-md mb-4"
                  >
                    Close
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
