import Categories from './Categories';
import Video from './Video';
export default function Content() {
  const videos = [
    {
      image:
        'https://i.ytimg.com/vi/0tcyiwF2Yms/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNYHRnaas5QO6bvhcEbUK5nLCnaQ://i.ytimg.com/vi/jfKfPfyJRdk/hq720_live.jpg?sqp=CPTkrLMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClPXMME-nE4g8VR-pjBAOuumn18Q',
      title: 'lofi hip hop radio 📚 - beats to relax/study to4',
      channel: 'Lofi Girl1'
    },
    {
        image:
          'https://i.ytimg.com/vi/jfKfPfyJRdk/hq720_live.jpg?sqp=CPTkrLMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClPXMME-nE4g8VR-pjBAOuumn18Q',
        title: 'lofi hip hop radio 📚 - beats to relax/study to3',
        channel: 'Lofi Girl2'
      },
      {
        image:
          'https://i.ytimg.com/vi/jfKfPfyJRdk/hq720_live.jpg?sqp=CPTkrLMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClPXMME-nE4g8VR-pjBAOuumn18Q',
        title: 'lofi hip hop radio 📚 - beats to relax/study to2',
        channel: 'Lofi Girl3'
      },
      {
        image:
          'https://i.ytimg.com/vi/jfKfPfyJRdk/hq720_live.jpg?sqp=CPTkrLMG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClPXMME-nE4g8VR-pjBAOuumn18Q',
        title: 'lofi hip hop radio 📚 - beats to relax/study to 1',
      },
  ];
  return (
    <section id='content'>
      <Categories />
      <section id='videos'>
        {
            videos.map((video) => {
                return(
                    <Video  key= {`video-${video.title}`}
                    image={video.image}
                    title={video.title}
                    channel={video.channel}
                     />
                )
            })
        }
      </section>
    </section>
  );
}
