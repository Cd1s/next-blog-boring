import { AiFillGithub, AiFillMail } from 'react-icons/ai'; // import react icons
import avatarJpg from '@/public/avatar.jpg';

export const config: IConfig = {
  name: 'Cheek Personal Home',
  avatar: avatarJpg,
  contact: [
    {
      icon: AiFillGithub,
      url: 'https://www.github.com/Cd1s'
    },
    {
      icon: AiFillMail,
      url: 'cheekd1s@outlook.com'
    }
  ],
  navList: [
    {
      title: 'Archives',
      url: '/archives'
    },
    {
      title: '显示的名称',  // 同时记得在 pages/ 目录下创建 链接.mdx 文件
      url: '/链接'
    }
  ],
  emoji: [
  '😜',
  '🤤',
  '🤪',
  '😳',
  '😍',
  '❤️',
  '🤭',
  '🥰',
  '😵‍💫',
  '😇',
  '😓',
  '🤣'
] // 单击主页空白区域随机弹出emoji表情，若数组留空，则不显示
};
