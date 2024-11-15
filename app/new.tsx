import { useRef } from 'react';

export default function CatFriends() {
  const listRef = useRef(null);

  function scrollToIndex(index) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <nav className='flex flex-row bg-black text-5xl'>
        <button onClick={() => scrollToIndex(0)}>
          Neo
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Millie
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Bella
        </button>

      </nav>
      <div>
        <ul className='flex flex-row w-96 h-96 overflow-auto' ref={listRef}>
          <li>
            <img
              src="shoes1.jpg"
              alt="Neo"
            />
          </li>
          <li>
            <img
              src="shoes2.jpg"
              alt="Millie"
            />
          </li>
          <li>
            <img
              src="shoes3.jpg"
              alt="Bella"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
