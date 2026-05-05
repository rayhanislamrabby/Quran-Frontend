export default function SettingsPanel({ settings, setSettings, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-80 h-full dark:bg-[#0f172a] bg-white p-6 border-l dark:border-gray-800">
        <h2 className="text-xl font-bold mb-8 dark:text-white">Settings</h2>
        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-2">ARABIC FONT</label>
            <select 
              value={settings.arabicFont}
              onChange={(e) => setSettings({...settings, arabicFont: e.target.value})}
              className="w-full p-2 rounded-lg dark:bg-gray-800 bg-gray-100 dark:text-white outline-none"
            >
              <option value="'Amiri', serif">Amiri</option>
              <option value="'Lateef', cursive">Lateef</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-2">ARABIC SIZE ({settings.arabicSize}px)</label>
            <input type="range" min="24" max="50" value={settings.arabicSize} onChange={(e) => setSettings({...settings, arabicSize: e.target.value})} className="w-full accent-green-600" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 block mb-2">TRANSLATION SIZE ({settings.translationSize}px)</label>
            <input type="range" min="14" max="24" value={settings.translationSize} onChange={(e) => setSettings({...settings, translationSize: e.target.value})} className="w-full accent-green-600" />
          </div>
        </div>
        <button onClick={onClose} className="mt-10 w-full py-3 bg-green-600 text-white rounded-xl font-bold">Close</button>
      </div>
    </div>
  );
}