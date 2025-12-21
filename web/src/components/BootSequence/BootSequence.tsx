import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Config } from '../../config/config';

interface BootSequenceProps {
    onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
    const { t } = useTranslation();
    const [lines, setLines] = useState<string[]>([]);

    // Sequence of messages (keys from locale)
    const messages = ['boot_msg_1', 'boot_msg_2', 'boot_msg_3', 'boot_msg_4', 'boot_msg_5'];

    useEffect(() => {
        let currentIndex = 0;

        // Interval to add lines one by one
        const interval = setInterval(() => {
            if (currentIndex >= messages.length) {
                clearInterval(interval);
                setTimeout(onComplete, 50); // Wait a bit before finishing
                return;
            }

            const key = messages[currentIndex];
            setLines(prev => [...prev, `[SYSTEM] ${t(key)}`]);
            currentIndex++;
        }, Config.bootDuration / messages.length);

        return () => clearInterval(interval);
    }, [t, onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col justify-start p-10 font-mono text-green-500 text-lg overflow-hidden">
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1 }}
                    className="mb-2"
                >
                    {line} <span className="text-green-300">... OK</span>
                </motion.div>
            ))}
            <div className="animate-pulse mt-4">_</div>
        </div>
    );
}
