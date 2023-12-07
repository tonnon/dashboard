import { usePathname } from 'next/navigation';

export default function usePathName() {
    const pathname = usePathname();
    return pathname;
  }