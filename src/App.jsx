import React, { useState } from 'react';
import { User, Book, Users, Globe, Award, Plus, Search, MessageCircle, Calendar, Map, Lock, Unlock, MapPin, Camera, Trophy } from 'lucide-react';

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
  const [showMap, setShowMap] = useState(false);
  const [questDay, setQuestDay] = useState('friday');
  const [unlockedLocations, setUnlockedLocations] = useState([0]);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [showSubmission, setShowSubmission] = useState(false);

  const [stamps, setStamps] = useState([
    { id: 1, name: 'James Chen', origin: 'China', connection: 'Direct - 18th century trade route' },
    { id: 2, name: 'Maria Garcia', origin: 'Spain', connection: 'Indirect - Scottish-Spanish alliance 1600s' },
    { id: 3, name: "David O'Brien", origin: 'Ireland', connection: "Possible relative - O'Brien clan" }
  ]);

  const [connections] = useState([
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
    { id: 4, name: 'Emma Johnson', origin: 'England', connection: 'Shared ancestor - William Johnson 1750s' },
    { id: 5, name: 'Carlos Rivera', origin: 'Mexico', connection: 'Regional link - Spanish colonial period' },
    { id: 6, name: 'Yuki Tanaka', origin: 'Japan', connection: 'Cultural exchange - shared immigration era' },
    { id: 7, name: 'Fatima Hassan', origin: 'Egypt', connection: 'Historical link - ancient trade routes' }
  ];

  const fridayQuests = [
    { id: 0, location: 'Temple Square', icon: '⛪', title: 'The Angel\'s Message', clue: 'Where the angel Moroni stands tall, count the spires that touch them all.', points: 100 },
    { id: 1, location: 'Church History Museum', icon: '📚', title: 'Pioneer Heritage', clue: 'In the halls where stories sleep, find the wagon wheels so deep.', points: 150 },
    { id: 2, location: 'FamilySearch Library', icon: '🔍', title: 'Names & Hearts', clue: 'Find a name that shares your last, connect to someone from the past.', points: 200 },
    { id: 3, location: 'Beehive House', icon: '🏛️', title: 'Service in Action', clue: 'Where Brigham Young once led with care, find someone who needs repair.', points: 250 },
    { id: 4, location: 'Conference Center', icon: '🎤', title: 'Testimonies Unite', clue: 'In the place where prophets speak, share your testimony.', points: 300 }
  ];

  const saturdayQuests = [
    { id: 0, location: 'Lagoon Entrance', icon: '🎡', title: 'The Journey Begins', clue: 'At the gates where fun awaits, find the year that Lagoon creates.', points: 100 },
    { id: 1, location: 'Heritage Square', icon: '🏛️', title: 'Pioneer Founders', clue: 'In the square where history lives, find the plaque that knowledge gives.', points: 150 },
    { id: 2, location: 'Roller Coaster Alley', icon: '🎢', title: 'Facing Fears Together', clue: 'Ride the coaster that loops and soars, take a photo mid-air.', points: 200 },
    { id: 3, location: 'Water Park', icon: '💦', title: 'Baptism By Water', clue: 'Where water splashes, cool and clear, find the wave pool drawing near.', points: 250 },
    { id: 4, location: 'Lagoon Museum', icon: '🏺', title: 'Roots & Recreation', clue: 'In the museum of days gone by, find the carousel that makes time fly.', points: 300 }
  ];

  const conferenceSchedule = [
    { day: 'Friday', time: '2:00 PM - 5:00 PM', title: '🗺️ Heritage Quest: Temple Square Adventure', speaker: 'Self-Guided Team Quest', room: 'Downtown SLC', category: 'quest' },
    { day: 'Friday', time: '5:00 PM - 8:00 PM', title: '🏓 Courts of Connection: Pickleball Tournament', speaker: 'Recreation Leaders', room: 'Sports Complex', category: 'activity' },
    { day: 'Friday', time: '5:00 PM - 8:00 PM', title: '🎮 Super Smash Bros Tournament', speaker: 'Gaming Committee', room: 'Game Room', category: 'activity' },
    { day: 'Friday', time: '8:00 PM - 9:00 PM', title: '🎤 Opening Fireside: Turning Hearts', speaker: 'Elder James R. Martinez', room: 'Main Hall', category: 'spiritual' },
    { day: 'Friday', time: '9:30 PM - 12:00 AM', title: '💃 2000\'s Throwback Dance Party', speaker: 'DJ Mike Rodriguez', room: 'Grand Ballroom', category: 'dance' },
    { day: 'Saturday', time: '9:00 AM - 10:00 AM', title: 'Morning Devotional & Breakfast', speaker: 'Sister Maria Santos', room: 'Main Hall', category: 'spiritual' },
    { day: 'Saturday', time: '10:30 AM - 5:00 PM', title: '🗺️ Heritage Quest: Lagoon Adventure', speaker: 'Self-Guided Team Quest', room: 'Lagoon Amusement Park', category: 'quest' },
    { day: 'Saturday', time: '10:30 AM - 9:00 PM', title: '🎡 Lagoon YSA Takeover - Rides & Activities', speaker: 'All Day Fun', room: 'Lagoon Amusement Park', category: 'activity' },
    { day: 'Saturday', time: '10:30 AM - 9:00 PM', title: '🎲 Board Game Bonanza (for non-riders)', speaker: 'Game Masters', room: 'Lagoon Pavilions', category: 'activity' },
    { day: 'Saturday', time: '5:00 PM - 7:00 PM', title: '🍔 BBQ Dinner & Fellowship', speaker: '', room: 'Lagoon Pavilions', category: 'break' },
    { day: 'Saturday', time: '7:00 PM - 9:00 PM', title: '⛪ Fireside: Temple Work & Family History', speaker: 'Elder David K. Park', room: 'Conference Center', category: 'spiritual' },
    { day: 'Saturday', time: '9:30 PM - 12:00 AM', title: '💃 Saturday Night Dance: EDM & Pop Hits', speaker: 'DJ Sarah Chen', room: 'Grand Ballroom', category: 'dance' }
  ];

  const activeQuests = questDay === 'friday' ? fridayQuests : saturdayQuests;

  const unlockLocation = (id) => {
    if (!unlockedLocations.includes(id)) {
      setUnlockedLocations([...unlockedLocations, id]);
    }
    setCurrentChallenge(id);
  };

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
      history: 'The Mitchell surname emerged in Scotland during the 13th century.',
      famousIndividuals: ['Joni Mitchell - Musician', 'Margaret Mitchell - Author'],
      migration: ['Scotland → Northern Ireland (1600s)', 'Ireland → North America (1700s-1800s)'],
      dnaRegions: ['Celtic - 45%', 'Scandinavian - 30%', 'Anglo-Saxon - 25%']
    });
    setIsSearching(false);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-sans">
      <div className="relative bg-gradient-to-r from-purple-400 via-pink-300 to-rose-300 text-white p-4 rounded-t-3xl shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='white'%3E%3Crect x='85' y='60' width='30' height='80'/%3E%3Crect x='50' y='80' width='25' height='60'/%3E%3Crect x='125' y='80' width='25' height='60'/%3E%3Cpolygon points='100,20 85,60 115,60'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }} />
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>What's Your Story</h1>
          <p className="text-center text-purple-50 text-sm mt-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.4)' }}>YSA Conference 2027</p>
        </div>
      </div>
      
      <div className="mt-4">
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
                The surname <span className="font-bold">Mitchell</span> has strong Scottish and English roots.
              </p>
              <button onClick={() => { setShowSearch(true); simulateSearch(userProfile.lastName); }}
                className="w-full mt-4 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-xl p-3 font-semibold">
                🔍 Deep Dive: Research My Lineage
              </button>
            </div>
          </div>
        )}

        {currentView === 'passport' && (
          <div className="p-6 pb-24">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 shadow-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Award className="text-purple-500 mr-2" size={28} />
                  <h2 className="text-2xl font-bold text-gray-800">My Passport</h2>
                </div>
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-md">{stamps.length}</div>
              </div>
              <p className="text-gray-600">Tap phones to exchange stamps!</p>
            </div>

            <button onClick={simulateConnection} disabled={isConnecting}
              className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl p-6 mb-6 shadow-lg disabled:opacity-70">
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
                const colors = { 'Direct Relative': 'from-pink-400 to-rose-400', 'Regional Link': 'from-blue-400 to-cyan-400', 'Historical Link': 'from-green-400 to-teal-400' };
                const bgColors = { 'Direct Relative': 'from-pink-100 to-rose-100', 'Regional Link': 'from-blue-100 to-cyan-100', 'Historical Link': 'from-green-100 to-teal-100' };
                return (
                  <div key={idx} className={`bg-gradient-to-br ${bgColors[conn.type]} rounded-2xl p-5 shadow-md`}>
                    <span className={`inline-block bg-gradient-to-r ${colors[conn.type]} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>{conn.type}</span>
                    <h4 className="font-bold text-gray-800 text-lg">{conn.name}</h4>
                    <p className="text-gray-700 mt-1">{conn.relation}</p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                      <span className="text-xs text-gray-600">Confidence Level:</span>
                      <span className={`text-sm font-semibold ${conn.confidence === 'High' ? 'text-green-600' : conn.confidence === 'Medium' ? 'text-blue-500' : 'text-gray-600'}`}>{conn.confidence}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-5 shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><span className="mr-2">🤝</span>Shared Interests</h3>
              <p className="text-sm text-gray-600 mb-4">Find others researching similar topics</p>
              {sharedInterests.map((interest, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{interest.category}</p>
                      <p className="font-semibold text-gray-800 mt-1">{interest.interest}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-sm">{interest.matches}</div>
                      <p className="text-xs text-gray-500 mt-1">matches</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'quest' && (
          <div className="p-4 pb-24">
            <div className="flex gap-2 mb-4">
              <button onClick={() => setQuestDay('friday')} className={`flex-1 py-3 rounded-xl font-semibold ${questDay === 'friday' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' : 'bg-white text-gray-600'}`}>
                🏛️ Friday Quest
              </button>
              <button onClick={() => setQuestDay('saturday')} className={`flex-1 py-3 rounded-xl font-semibold ${questDay === 'saturday' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' : 'bg-white text-gray-600'}`}>
                🎡 Saturday Quest
              </button>
            </div>

            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-5 mb-4 shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{questDay === 'friday' ? '🏛️ Heritage Quest' : '🎡 Lagoon Adventure'}</h2>
                  <p className="text-sm text-gray-700">{questDay === 'friday' ? 'Explore Salt Lake City\'s sacred landmarks!' : 'Experience Lagoon through faith-filled fun!'}</p>
                </div>
                <button onClick={() => setShowMap(true)} className="ml-3 bg-white text-purple-600 rounded-full p-3 shadow-md">
                  <MapPin size={24} />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {activeQuests.map((quest) => {
                const isUnlocked = unlockedLocations.includes(quest.id);
                const isActive = currentChallenge === quest.id;
                return (
                  <div key={quest.id} onClick={() => isUnlocked && unlockLocation(quest.id)} className={`rounded-2xl p-4 shadow-md ${isActive ? 'bg-gradient-to-r from-amber-200 to-yellow-200 ring-2 ring-amber-500' : isUnlocked ? 'bg-white cursor-pointer hover:shadow-lg' : 'bg-gray-100 opacity-60'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start flex-1">
                        <div className="text-4xl mr-3">{quest.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800">{quest.title}</h3>
                          <p className="text-sm text-gray-600 flex items-center mt-1"><MapPin size={14} className="mr-1" />{quest.location}</p>
                          {isUnlocked && <p className="text-sm text-gray-700 mt-2 italic">"{quest.clue}"</p>}
                        </div>
                      </div>
                      <div className="flex flex-col items-end ml-2">
                        {isUnlocked ? <Unlock size={24} className="text-green-500" /> : <Lock size={24} className="text-gray-400" />}
                        <span className="text-xs font-bold text-amber-600 mt-1">+{quest.points}</span>
                      </div>
                    </div>
                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-gray-300">
                        <button onClick={() => setShowSubmission(true)} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-3 font-semibold flex items-center justify-center">
                          <Camera size={20} className="mr-2" />Submit Challenge
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-white rounded-3xl p-5 shadow-md">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center"><Trophy className="mr-2 text-amber-500" size={24} />Team Leaderboard</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-amber-50 rounded-lg">
                  <span className="font-semibold">🥇 Team Pioneer Spirit</span>
                  <span className="text-amber-600 font-bold">450 pts</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span>🥈 Team Heritage Hunters</span>
                  <span className="text-gray-600">425 pts</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span>🥉 Team Temple Trackers</span>
                  <span className="text-gray-600">400 pts</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'schedule' && (
          <div className="p-6 pb-24">
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-6 shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Conference Schedule</h2>
              <p className="text-gray-600">Select events you plan to attend</p>
            </div>

            <div className="flex gap-2 mb-6">
              {['Friday', 'Saturday'].map((day) => (
                <button key={day} onClick={() => setSelectedDay(day)} className={`flex-1 py-3 rounded-xl font-semibold text-sm ${selectedDay === day ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md' : 'bg-gray-100 text-gray-600'}`}>
                  {day}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {conferenceSchedule.filter(session => session.day === selectedDay).map((session, idx) => {
                const isAttending = attendingEvents.includes(session.title);
                const categoryColors = { 
                  quest: 'from-amber-100 to-orange-100 border-amber-400', 
                  activity: 'from-cyan-100 to-blue-100 border-cyan-400', 
                  spiritual: 'from-purple-100 to-indigo-100 border-purple-500', 
                  dance: 'from-fuchsia-200 to-purple-200 border-fuchsia-500',
                  break: 'from-gray-100 to-gray-200 border-gray-400'
                };
                return (
                  <div key={idx} className={`bg-gradient-to-r ${categoryColors[session.category] || 'from-gray-100 to-gray-200 border-gray-400'} rounded-xl p-4 border-l-4 shadow-sm relative ${isAttending ? 'ring-2 ring-purple-500' : ''}`}>
                    <p className="text-xs text-gray-600 font-semibold uppercase">{session.time}</p>
                    <p className="font-bold text-gray-800 mt-1 pr-12">{session.title}</p>
                    {session.speaker && <p className="text-sm text-gray-700 mt-1">👤 {session.speaker}</p>}
                    <p className="text-sm text-gray-600 mt-1">📍 {session.room}</p>
                    <button onClick={() => toggleAttending(session.title)} className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${isAttending ? 'bg-purple-500 text-white shadow-md' : 'bg-white text-gray-400 hover:bg-gray-100'}`}>
                      {isAttending ? '✓' : '+'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 bg-indigo-50 border-l-4 border-indigo-400 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">📊</span> You're attending {attendingEvents.length} events.
              </p>
            </div>
          </div>
        )}

        {currentView === 'discover' && (
          <div className="p-6 pb-24">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-6 shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Discover</h2>
              <p className="text-gray-600">Tools to help everyone connect</p>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-md mb-4">
              <h3 className="font-bold text-gray-800 text-lg mb-3">Join a Discussion</h3>
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
              <div className="space-y-2">
                <div className="bg-white rounded-xl p-3 text-sm text-gray-700">✓ Search records by your birth location</div>
                <div className="bg-white rounded-xl p-3 text-sm text-gray-700">✓ Explore DNA matches and ethnic regions</div>
                <div className="bg-white rounded-xl p-3 text-sm text-gray-700">✓ Connect with others from your region</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-5 shadow-md">
              <h3 className="font-bold text-gray-800 text-lg mb-2">💬 Need Help?</h3>
              <button className="w-full bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-xl p-3 font-semibold">Request Expert Consultation</button>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-purple-100 flex justify-around p-3 rounded-t-3xl shadow-lg max-w-md mx-auto">
        <button onClick={() => setCurrentView('profile')} className={`flex flex-col items-center ${currentView === 'profile' ? 'text-purple-500' : 'text-gray-400'}`}>
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </button>
        <button onClick={() => setCurrentView('passport')} className={`flex flex-col items-center ${currentView === 'passport' ? 'text-purple-500' : 'text-gray-400'}`}>
          <Book size={20} />
          <span className="text-xs mt-1">Passport</span>
        </button>
        <button onClick={() => setCurrentView('connections')} className={`flex flex-col items-center ${currentView === 'connections' ? 'text-purple-500' : 'text-gray-400'}`}>
          <Users size={20} />
          <span className="text-xs mt-1">Connect</span>
        </button>
        <button onClick={() => setCurrentView('quest')} className={`flex flex-col items-center ${currentView === 'quest' ? 'text-purple-500' : 'text-gray-400'}`}>
          <Map size={20} />
          <span className="text-xs mt-1">Quest</span>
        </button>
        <button onClick={() => setCurrentView('schedule')} className={`flex flex-col items-center ${currentView === 'schedule' ? 'text-purple-500' : 'text-gray-400'}`}>
          <Calendar size={20} />
          <span className="text-xs mt-1">Schedule</span>
        </button>
        <button onClick={() => setCurrentView('discover')} className={`flex flex-col items-center ${currentView === 'discover' ? 'text-purple-500' : 'text-gray-400'}`}>
          <Globe size={20} />
          <span className="text-xs mt-1">Discover</span>
        </button>
      </div>

      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowSearch(false)}>
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-blue-400 to-teal-400 text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Lineage Research</h2>
                <button onClick={() => setShowSearch(false)} className="bg-white bg-opacity-20 rounded-full p-2 text-2xl w-10 h-10 flex items-center justify-center">✕</button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 p-6">
              {isSearching ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-400 mx-auto mb-4"></div>
                  <p className="text-gray-600">Searching...</p>
                </div>
              ) : searchResults && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-5">
                    <h3 className="font-bold text-xl mb-2">{searchResults.surname}</h3>
                    <p className="text-sm italic mb-3">{searchResults.meaning}</p>
                    <div className="bg-white rounded-xl p-4">
                      <p className="text-sm">{searchResults.history}</p>
                    </div>
                  </div>
                  <button onClick={() => setShowSearch(false)} className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl p-4 font-semibold">Close</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowSubmission(false)}>
          <div className="bg-white rounded-3xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Submit Challenge</h2>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-4 flex items-center justify-center">
                <Camera size={24} className="mr-2" />Take Photo
              </button>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-4 flex items-center justify-center">
                <Camera size={24} className="mr-2" />Record Video
              </button>
              <button onClick={() => setShowSubmission(false)} className="w-full bg-gray-200 text-gray-800 rounded-xl p-4">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowMap(false)}>
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{questDay === 'friday' ? '🏛️ Quest Map' : '🎡 Lagoon Map'}</h2>
                <button onClick={() => setShowMap(false)} className="bg-white bg-opacity-20 rounded-full p-2 text-2xl w-10 h-10 flex items-center justify-center">✕</button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 p-6">
              <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 mb-4 min-h-[400px]">
                {questDay === 'friday' ? (
                  <div className="relative w-full h-full min-h-[400px]">
                    <div className="absolute" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(0) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>⛪</div>
                      <p className="text-xs text-center mt-1 font-bold">Temple</p>
                    </div>
                    <div className="absolute" style={{ top: '35%', left: '15%' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(1) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>📚</div>
                      <p className="text-xs text-center mt-1 font-bold">Museum</p>
                    </div>
                    <div className="absolute" style={{ top: '35%', right: '15%' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(2) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>🔍</div>
                      <p className="text-xs text-center mt-1 font-bold">Library</p>
                    </div>
                    <div className="absolute" style={{ bottom: '15%', left: '25%' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(3) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>🏛️</div>
                      <p className="text-xs text-center mt-1 font-bold">Beehive</p>
                    </div>
                    <div className="absolute" style={{ bottom: '15%', right: '20%' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(4) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>🎤</div>
                      <p className="text-xs text-center mt-1 font-bold">Conference</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full min-h-[400px]">
                    <div className="absolute" style={{ top: '8%', left: '50%', transform: 'translateX(-50%)' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(0) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>🎡</div>
                      <p className="text-xs text-center mt-1 font-bold">Entrance</p>
                    </div>
                    <div className="absolute" style={{ top: '30%', left: '10%' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(1) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>🏛️</div>
                      <p className="text-xs text-center mt-1 font-bold">Heritage</p>
                    </div>
                    <div className="absolute" style={{ top: '28%', right: '8%' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(2) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>🎢</div>
                      <p className="text-xs text-center mt-1 font-bold">Coasters</p>
                    </div>
                    <div className="absolute" style={{ bottom: '18%', left: '30%' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(3) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>💦</div>
                      <p className="text-xs text-center mt-1 font-bold">Water</p>
                    </div>
                    <div className="absolute" style={{ bottom: '15%', right: '15%' }}>
                      <div className={`w-14 h-14 rounded-full ${unlockedLocations.includes(4) ? 'bg-green-400 ring-4 ring-green-300' : 'bg-gray-300'} flex items-center justify-center shadow-lg text-2xl`}>🏺</div>
                      <p className="text-xs text-center mt-1 font-bold">Museum</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
                <h3 className="font-bold mb-3">Legend</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-400 rounded-full mr-3"></div>
                    <span>Unlocked</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <span>Locked</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setShowMap(false)} className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl p-4 font-semibold">Close Map</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}