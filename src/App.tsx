import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { globalRouters } from './router';
import { ConfigProvider } from 'antd';
import { useSystemStore } from './store';
import { motion, AnimatePresence } from 'framer-motion';
import zhCN from 'antd/locale/zh_CN';

const getRandomInitialPosition = () => {
  const positions = [
    { x: -100, y: -100 }, // 左上
    { x: - window.innerWidth - 100, y: 100 }, // 右上
    { x: -100, y: - window.innerHeight - 100 }, // 左下
    { x: - window.innerWidth - 100, y: - window.innerHeight - 100 }, // 右下
  ];
  return positions[Math.floor(Math.random() * positions.length)];
};

const AnimatedRoutes: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [key, setKey] = useState(window.location.href);
  const [initialPosition, setInitialPosition] = useState(getRandomInitialPosition());

  useEffect(() => {
    const i = setInterval(() => {
      setKey(window.location.href);
      setInitialPosition(getRandomInitialPosition());
    }, 10);
    return () => clearInterval(i);
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        key={key}
        initial={{ opacity: 0, x: initialPosition.x, y: initialPosition.y }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const systemPrimary = useSystemStore((state) => state.systemPrimary);
  const systemSize = useSystemStore((state) => state.systemSize);
  const systemFontFamily = useSystemStore((state) => state.systemFontFamily);


  return (
    <ConfigProvider
      componentSize={systemSize}
      theme={{
        token: {
          colorPrimary: systemPrimary,
          colorLink: systemPrimary,
        },
      }}
      locale={zhCN}
    >
      <AnimatedRoutes>
        <div className={'font-family-' + systemFontFamily}>
          <RouterProvider router={globalRouters} />
        </div>
      </AnimatedRoutes>
    </ConfigProvider>
  );
};

export default App;
