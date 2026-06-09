import { useEffect, useState } from 'react';
import { Button } from './Button';
import { IconButton } from './IconButton';
import { Input } from './Input';
import { Select } from './Select';
import { Checkbox } from './Checkbox';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, Dir, Lang } from '../types';

interface BookingModalProps {
  t: Copy;
  lang: Lang;
  dir: Dir;
  open: boolean;
  onClose: () => void;
}

export function BookingModal({ t, lang, dir, open, onClose }: BookingModalProps) {
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    if (open) {
      setDone(false);
      setConsent(true);
    }
  }, [open]);

  if (!open) return null;
  const font = lang === 'ar' ? 'font-ar' : 'font-en';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-[rgba(5,2,79,0.55)] backdrop-blur-[4px] flex items-center justify-center p-5"
    >
      <div
        dir={dir}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[460px] bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-brand px-6 py-[22px] flex items-start justify-between">
          <div>
            <div className={cn(font, 'text-[13px] font-semibold text-white/85')}>
              {t.modal.kicker}
            </div>
            <div className={cn(font, 'text-[22px] font-extrabold text-white mt-0.5')}>
              {t.modal.title}
            </div>
          </div>
          <IconButton
            variant="ghost"
            ariaLabel="Close"
            icon={<Icon name="x" size={19} />}
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff' }}
          />
        </div>

        {done ? (
          <div className="px-7 py-10 text-center">
            <div className="h-16 w-16 rounded-full bg-teal-tint text-teal inline-flex items-center justify-center mb-4">
              <Icon name="check" size={32} />
            </div>
            <h3 className={cn(font, 'text-[22px] text-navy mb-2 mt-0')}>{t.modal.successTitle}</h3>
            <p className={cn(font, 'text-[15px] text-slate leading-[1.6] mb-[22px] mt-0')}>
              {t.modal.successBody}
            </p>
            <Button variant="primary" fullWidth onClick={onClose}>
              {t.modal.successCta}
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
            className="p-6 flex flex-col gap-4"
          >
            <Input
              label={t.modal.fParent}
              placeholder={t.modal.pParent}
              icon={<Icon name="user" size={18} />}
            />
            <Input
              label={t.modal.fEmail}
              type="email"
              placeholder="you@example.com"
              icon={<Icon name="mail" size={18} />}
            />
            <div className="grid grid-cols-2 gap-3.5">
              <Input label={t.modal.fChild} placeholder={t.modal.pChild} />
              <Select label={t.modal.fAge} options={['8–10', '10–12', '12–14', '14–16']} />
            </div>
            <Checkbox
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              label={t.modal.consent}
            />
            <Button
              variant="primary"
              size="lg"
              fullWidth
              type="submit"
              iconRight={dir === 'rtl' ? null : <Icon name="arrow-right" size={20} />}
            >
              {t.modal.submit}
            </Button>
            <p className={cn(font, 'text-[12.5px] text-slate text-center m-0')}>{t.modal.fine}</p>
          </form>
        )}
      </div>
    </div>
  );
}
