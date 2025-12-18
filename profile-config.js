// Profile-specific renderer for Dashboard
(function(){
  window.applyDashboardProfileConfig = function(){
    var profileType = localStorage.getItem('profileType') || 'weak';
    var cfg = profileType === 'strong'
      ? { accuracy: 92, streak: 7, solved: 240, s: { m: 93, s: 88, e: 95, so: 89 }, recs: [ { type: 'challenge', title: 'Tackle Advanced Geometry', desc: 'Proof-based problems.' }, { type: 'practice', title: 'Speed Drills', desc: 'Timed sets to push accuracy and speed.' }, { type: 'explore', title: 'Explore Olympiad Topics', desc: 'Inequalities, combinatorics, number theory.' } ] }
      : { accuracy: 78, streak: 1, solved: 85, s: { m: 75, s: 68, e: 82, so: 70 }, recs: [ { type: 'focus', title: 'Focus on Science Basics', desc: 'Review fundamentals.' }, { type: 'weakness', title: 'Strengthen Geometry', desc: 'Guided practice to build confidence.' }, { type: 'strength', title: 'Keep English Momentum', desc: 'Reading and vocabulary drills.' } ] };

    var acc = document.getElementById('overallAccuracy'); if (acc) acc.textContent = cfg.accuracy + '%';
    var streak = document.getElementById('currentStreak'); if (streak) streak.textContent = cfg.streak;
    var solved = document.getElementById('totalProblemsSolved'); if (solved) solved.textContent = cfg.solved;

    function setQuick(prefix, val){
      var p = document.getElementById(prefix + 'QuickPercent'); if (p) p.textContent = val + '%';
      var b = document.getElementById(prefix + 'QuickBar'); if (b) b.style.width = val + '%';
    }
    setQuick('math', cfg.s.m);
    setQuick('science', cfg.s.s);
    setQuick('english', cfg.s.e);
    setQuick('social', cfg.s.so);

    function setProgress(prefix, percent, problems){
      var pEl = document.getElementById(prefix + 'ProgressPercent'); if (pEl) pEl.textContent = percent + '%';
      var cEl = document.getElementById(prefix + 'ProblemsCount'); if (cEl) cEl.textContent = problems + ' problems';
      var barEl = document.getElementById(prefix + 'ProgressBar'); if (barEl) barEl.style.width = percent + '%';
    }
    setProgress('math', cfg.s.m, Math.round(cfg.s.m/1.4));
    setProgress('science', cfg.s.s, Math.round(cfg.s.s/2));
    setProgress('english', cfg.s.e, Math.round(cfg.s.e/1.9));
    setProgress('social', cfg.s.so, Math.round(cfg.s.so/2.3));

    var recEl = document.getElementById('aiRecommendations');
    if (recEl) {
      recEl.innerHTML = cfg.recs.map(function(r){
        var color = r.type==='challenge'?'bg-indigo-500': r.type==='practice'?'bg-blue-500': r.type==='explore'?'bg-purple-500': r.type==='strength'?'bg-green-500': 'bg-yellow-500';
        var icon = r.type==='challenge'?'🚀': r.type==='practice'?'🎯': r.type==='explore'?'🧭': r.type==='strength'?'🌟': '💡';
        return '<div class="recommendation-card p-4 rounded-lg">\n' +
               '  <div class="flex items-start space-x-3">\n' +
               '    <div class="w-8 h-8 ' + color + ' rounded-full flex items-center justify-center flex-shrink-0">\n' +
               '      <span class="text-white text-sm">' + icon + '</span>\n' +
               '    </div>\n' +
               '    <div>\n' +
               '      <h4 class="font-semibold text-gray-800 mb-1">' + r.title + '</h4>\n' +
               '      <p class="text-sm text-gray-600">' + r.desc + '</p>\n' +
               '    </div>\n' +
               '  </div>\n' +
               '</div>';
      }).join('');
    }
  };
})();