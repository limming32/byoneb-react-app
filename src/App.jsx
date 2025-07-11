import React from 'react';

function App() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 font-sans">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-800 mb-2">
        🦷 치과 개원 의사 성향 분석 툴
      </h1>
      <p className="text-center text-gray-600 mb-6">
        개원을 앞둔 의사 선생님의 성향을 분석하여, 가장 적합한 입지, 규모, 직원 구조를 추천해 드립니다.
      </p>

      <p className="text-sm text-center text-gray-400 mb-6">
        현재 사용자 ID: <span className="font-mono text-blue-500">Z81wkGAA83yOJ1AIyURpzArgPED3</span>
      </p>

      <form className="space-y-8">
        {/* 질문 1 */}
        <div className="bg-blue-50 rounded-lg p-5 shadow-sm">
          <label className="block font-semibold text-gray-800 mb-4">
            1. 진료 철학 중 가장 중요하게 생각하는 것은 무엇인가요?
          </label>
          <div className="space-y-2">
            <label className="block">
              <input type="radio" name="q1" className="mr-2" />
              환자 중심의 세심한 진료와 소통
            </label>
            <label className="block">
              <input type="radio" name="q1" className="mr-2" />
              효율적이고 신속한 진료 프로세스
            </label>
            <label className="block">
              <input type="radio" name="q1" className="mr-2" />
              최신 기술과 장비를 활용한 선도적 진료
            </label>
            <label className="block">
              <input type="radio" name="q1" className="mr-2" />
              예방 중심의 장기적인 구강 건강 관리
            </label>
          </div>
        </div>

        {/* 질문 2 */}
        <div className="bg-blue-50 rounded-lg p-5 shadow-sm">
          <label className="block font-semibold text-gray-800 mb-4">
            2. 가장 자신 있거나 집중하고 싶은 진료 분야는 무엇인가요?
          </label>
          <div className="space-y-2">
            <label className="block">
              <input type="radio" name="q2" className="mr-2" />
              고난이도 전문 진료 (임플란트, 교정, 구강외과 등)
            </label>
            <label className="block">
              <input type="radio" name="q2" className="mr-2" />
              다양한 일반 진료 (보존, 보철, 치주 등)의 폭넓은 제공
            </label>
            <label className="block">
              <input type="radio" name="q2" className="mr-2" />
              심미 진료 (라미네이트, 치아미백 등) 특화
            </label>
            <label className="block">
              <input type="radio" name="q2" className="mr-2" />
              소아 및 가족 단위 진료
            </label>
          </div>
        </div>

        {/* 질문 3 */}
        <div className="bg-blue-50 rounded-lg p-5 shadow-sm">
          <label className="block font-semibold text-gray-800 mb-4">
            3. 하루에 진료하고 싶은 평균 환자 수는 어느 정도인가요?
          </label>
          <div className="space-y-2">
            <label className="block">
              <input type="radio" name="q3" className="mr-2" />
              소수 정예의 환자에게 집중 (15~20명)
            </label>
            <label className="block">
              <input type="radio" name="q3" className="mr-2" />
              일정 수의 환자에게 효율적 진료 (30~35명)
            </label>
            <label className="block">
              <input type="radio" name="q3" className="mr-2" />
              하루 50명 이상의 회전율 높은 진료
            </label>
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;