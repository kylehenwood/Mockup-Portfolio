import {
  TRANSITION_MODES,
  setTransitionMode,
  useTransitionMode,
} from '../state/transition.js';

export default function TransitionPicker() {
  const mode = useTransitionMode();

  return (
    <div className="transition-picker" role="region" aria-label="Transition picker">
      <label className="transition-picker__label" htmlFor="transition-picker">
        Transition
      </label>
      <select
        id="transition-picker"
        className="transition-picker__select"
        value={mode}
        onChange={(e) => setTransitionMode(e.target.value)}
      >
        {TRANSITION_MODES.map((m) => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>
    </div>
  );
}

export const meta = {
  name: 'TransitionPicker',
  category: 'Chrome',
  description: 'Floating dev control (bottom-right) that lets you swap between page transition modes. Mirrors the choice to <html data-transition="..."> so CSS hooks into it; persists to localStorage.',
  props: [],
};
