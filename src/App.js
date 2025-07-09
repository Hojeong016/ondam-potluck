import React from 'react';
import { Users, Utensils, Clock, MessageCircle, MapPin, Car, UserCheck, Gift, Camera, AlertTriangle, Calendar, ArrowRight, CheckCircle, Coffee, Presentation as PresentationChart, AlarmClock, Heart, Star, Sparkles, Link as LinkIcon } from 'lucide-react';
import './index.css';

function App() {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center relative">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-orange-500" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full flex items-center justify-center">
                  <Heart className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">POTLUCK PARTY</span>
                <p className="text-sm text-gray-500">온담 커뮤니티</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('details')}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                행사 정보
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                타임테이블
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                장소 안내
              </button>
              <button 
                onClick={() => scrollToSection('guidelines')}
                className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
              >
                안내사항
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-pink-100/50"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <AlarmClock className="w-4 h-4 mr-2" />
            8월 23일 (토) 12:00-17:00 • 사전 예약 
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              POTLUCK PARTY
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-2xl text-gray-700 mb-4 font-medium leading-relaxed">
              Potluck은 '운에 맡기는 식사'에서 시작된 말이에요.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              서로가 준비한 음식을 함께 나누며 뜻밖의 인연과 따뜻한 이야기가 오가는 파티죠.<br/>
              우리는 이 작은 식탁 위에서 지식도, 경험도, 마음도 함께 나누고자 합니다.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-pink-500 mr-2" />
              <span className="text-lg font-semibold text-gray-800">특별 혜택</span>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">사전 예약 참여 시 25% 할인된 가격으로 참가 가능!</p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-2xl text-gray-400 line-through">20,000원</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="text-3xl font-bold text-orange-500">15,000원</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdW0AGZ_ck-MKi9Dw6vt34pviNIsSvPb9IM6zbDyuDP9ZcIzA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center"
            >
              사전 예약 신청하러 가기
              <ArrowRight className="w-6 h-6 ml-3 inline" />
            </a>
            <button 
              onClick={() => scrollToSection('details')}
              className="text-gray-700 hover:text-gray-900 px-10 py-5 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 font-semibold"
            >
              자세히 보기
            </button>
          </div>
        </div>
      </section>

      {/* Main Details Section - Unified Layout */}
      <section id="details" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">포트럭 파티 상세 정보</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              함께 성장하며, 서로의 경험을 나누는 자리. 그 자리에 당신을 초대합니다.
            </p>
          </div>

          {/* Unified Information Card */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="flex flex-col gap-12">
              
              {/* Left Column - Food Theme & Presentation */}
              <div className="space-y-8">
                {/* Food Theme */}
                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                      <Utensils className="w-7 h-7 text-orange-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-800">포트럭 파티 주제</h3>
                      <p className="text-orange-600 font-medium">내가 좋아하는 메뉴는?</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      내가 좋아하는 음식을 1가지 이상 준비해 함께 나눠요!
                    </p>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          직접 만든 음식
                        </div>
                        <div className="flex items-center text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          포장 음식
                        </div>
                        <div className="flex items-center text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          간식류
                        </div>
                        <div className="flex items-center text-green-600 font-medium">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          주류 / 음료
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Presentation */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                      <PresentationChart className="w-7 h-7 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-800">4명의 짧은 발표</h3>
                      <p className="text-blue-600 font-medium">part 1. AI를 활용한 놀이 웹 자료 만들기</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      총 4개의 짧은 발표가 준비되어 있어요.<br />
                      선공개 발표 : <strong>"AI로 10분 만에 만드는 놀이 웹사이트"</strong>, 현직 개발자와 함께합니다.
                    </p>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center text-blue-600 font-medium">
                        <Coffee className="w-5 h-5 mr-2" />
                        <span>실습 참여자는 개인 노트북을 준비해주세요</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-red-500">
                      🎤  짧은 발표는 여러분의 참여로 이루어집니다.
                      짧은 발표의 주인공이 되어보세요! 👉
                      <a href="https://open.kakao.com/o/sHzHU3Fh" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                        발표자 신청하러 가기
                      </a>
                    </p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-7 h-7 text-green-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-800">일정 안내</h3>
                      <p className="text-green-600 font-medium">8월 26일 (토요일)</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-green-500 mr-3" />
                          <span className="font-semibold text-gray-800">시간</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">12:00 ~ 17:00</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 text-green-500 mr-3" />
                          <span className="font-semibold text-gray-800">장소</span>
                        </div>
                        <span className="text-lg text-gray-600">언제라도 여행</span>
                      </div>
                      <p className="text-sm text-gray-600 pl-8 text-right">
                        합정역 2번 출구 인근<br />
                        세부 위치는 변경될 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reservation */}
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-pink-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-800">사전 예약 & 단톡방</h3>
                      <p className="text-pink-600 font-medium">7월 18일까지</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-pink-500 mr-3" />
                        <div>
                          <span className="font-semibold text-gray-800 block">사전 에약 이벤트 진행</span>
                          <span className="text-sm text-gray-600">7월 9일부터 18일 자정까지 사전예약 이벤트를 진행 중입니다. 25% 할인된 가격으로 만나보세요!</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center">
                        <LinkIcon className="w-5 h-5 text-pink-500 mr-3" />
                        <div>
                          <span className="font-semibold text-gray-800 block">단톡방 초대</span>
                          <span className="text-sm text-gray-600">사전 예약에 참여해주신 분들께는
                          7월 17일에 오프라인 커뮤니티 단톡방 초대 링크를 보내드릴 예정입니다.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Detailed Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlarmClock className="w-4 h-4 mr-2" />
              타임 테이블
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">하루 일정 안내</h2>
            <p className="text-xl text-gray-600">알찬 하루를 함께 보내요!</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              {/* Schedule Items */}
              <div className="flex items-start space-x-6 p-6 bg-orange-50 rounded-2xl">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-lg font-bold text-orange-600">12:00</div>
                  <div className="text-sm text-gray-500">13:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">1차 자유 네트워킹</h4>
                  <p className="text-gray-600">준비해온 음식과 함께,
                  서로를 알아가는 아이스브레이킹 시간을 진행합니다.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-pink-50 rounded-2xl">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-lg font-bold text-pink-600">13:00</div>
                  <div className="text-sm text-gray-500">14:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">2차 매칭 네트워킹</h4>
                  <p className="text-gray-600">서로의 이야기가 더 잘 닿을 수 있도록
                  사전 관심사에 따라 테이블이 구성됩니다.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-lg font-bold text-blue-600">14:10</div>
                  <div className="text-sm text-gray-500">15:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">짧은 발표</h4>
                  <p className="text-gray-600">서로 다른 주제로 구성된
                  짧은 발표들이 준비되어 있습니다.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-green-50 rounded-2xl">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-lg font-bold text-green-600">15:00</div>
                  <div className="text-sm text-gray-500">16:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">3차 자유 네트워킹</h4>
                  <p className="text-gray-600">정해진 자리에 얽매이지 않고,
                  자유롭게 테이블을 오가며 이야기를 나눌 수 있는 시간이에요.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-purple-50 rounded-2xl">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="text-lg font-bold text-purple-600">16:00</div>
                  <div className="text-sm text-gray-500">17:00</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">후기 작성 및 정리</h4>
                  <p className="text-gray-600">오늘의 소감을 나누고 마무리하는 시간입니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">장소 안내</h2>
            <p className="text-xl text-gray-600">합정역에서 만나요!</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">위치</h3>
                    <p className="text-gray-600">합정역 인근 (지하철 2호선)</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 mb-2">
                    <strong>세부 장소:</strong> 언제라도 여행
                  </p>
                  <p className="text-sm text-gray-600">
                    2호선 라인 내 변경 가능성이 있습니다.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Car className="w-8 h-8 text-purple-500 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">주차 안내</h3>
                    <p className="text-gray-600">전용 주차장 없음</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 mb-2">
                    <strong>권장사항:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 근처 유료 공영주차장 이용</li>
                    <li>• 대중교통 이용 권장</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">추가 안내사항</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              원활한 행사 진행을 위해 아래 안내사항을 확인해주세요.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Participants */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-blue-500 mr-4" />
                <h4 className="text-xl font-bold text-gray-800">참가 대상</h4>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>• 영유아/미취학 아동 관련 종사자</li>
                <li>• 예비 선생님</li>
                <li>• 관심 있는 누구나 환영</li>
              </ul>
            </div>
           
            {/* Photo Policy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Camera className="w-8 h-8 text-pink-500 mr-4" />
                <h4 className="text-xl font-bold text-gray-800">사진 촬영</h4>
              </div>
              <p className="text-gray-600">
                홍보 목적으로 일부 사진이 촬영될 수 있습니다. 참여 시 동의한 것으로 간주됩니다.
              </p>
            </div>

            {/* Cancellation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-3">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-500 mr-4" />
                <h4 className="text-xl font-bold text-gray-800">취소 및 환불 안내</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-2 font-semibold">
                    환불 정책
                  </p>
                  <ul className="text-sm text-gray-500 list-disc pl-5">
                    <li>행사 10일 전까지: 100% 환불</li>
                    <li>행사 5일 전까지: 50% 환불</li>
                    <li>그 이후: 환불 불가</li>
                  </ul>
                  <p className="text-sm text-gray-500">
                  <br />다른 분들의 참여 기회를 위해, 신중히 고민하신 후 신청 부탁드립니다.
                  </p>
                </div>
              
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section id="registration" className="py-24 px-4 bg-gradient-to-r from-orange-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              특별 할인 진행중
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              함께 즐거운 시간을 보내요!
            </h2>
            <p className="text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            맛있는 음식, 따뜻한 대화, 그리고 좋은 사람들과의 만남이 함께합니다.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              지금 신청하시면 25% 할인된 가격으로 참여하실 수 있어요!
            </p>
          </div>
          
          <div className="space-y-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdW0AGZ_ck-MKi9Dw6vt34pviNIsSvPb9IM6zbDyuDP9ZcIzA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center justify-center"
            >
              사전 예약 신청하러 가기
              <ArrowRight className="w-7 h-7 ml-4 inline" />
            </a>
            
            <div className="text-white/80">
              <p className="text-lg mb-2">궁금한 점이 있으시면 언제든 문의해주세요!</p>
              <p className="text-sm">참여 인원 제한이 있으니 서둘러 신청해주세요 ✨</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">POTLUCK PARTY</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                온담 커뮤니티에서 주최하는 포트럭 파티에 참여해보세요. 
                새로운 인연과 뜻깊은 경험이 기다리고 있습니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">행사 정보</h4>
              <ul className="space-y-2 text-gray-400">
                <li>일시: 8월 23일 (토) 12:00-17:00</li>
                <li>장소: 합정역 인근</li>
                <li>참가비: 15,000원 (할인가)</li>
                <li>문의: 온담 커뮤니티 운영자 : <br />
  <a href="https://open.kakao.com/o/sHzHU3Fh" target="_blank" rel="noopener noreferrer" className="underline text-orange-300 hover:text-orange-500">
    카카오톡 오픈채팅 바로가기
  </a>
</li>
    
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">주의사항</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li> ※ 신청 후 참석이 어려우실 경우, 꼭 미리 알려주세요. </li>
                <li> ※ 행사 일정 및 세부 장소는 상황에 따라 변경될 수 있습니다.</li>
                <li> ※ 일부 현장 사진이 추후 커뮤니티 홍보에 사용될 수 있으며, 동의하신 분에 한해 촬영이 진행됩니다.</li>
                <li> ※ 준비해오신 음식은 참가자 간의 자율 나눔을 기반으로 합니다.</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 온담 커뮤니티 POTLUCK PARTY. All rights reserved.
              </p>
              <div className="text-gray-400 text-sm">
                Made with ❤️ for community connection
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
