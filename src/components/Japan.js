import Header from './Header';
import Photo from './Photo';
import './Japan.css';

export default function Japan() {
  return (
    <>
      <Header text="Japan" />
      <div className="photo-section">
        <Photo src="/japan/tsukiji.JPG" alt="Tsukiji Market Fish Vendor" />
        <Photo src="/japan/sushi-breakfast.JPG" alt="Emma eating at a Tsukiji sushi restaurant" />
        <Photo src="/japan/chips.PNG" alt="Chips through the eyes of a bad translation app" />
        <Photo src="/japan/piss-alley.JPG" alt="Me walking through 'Piss Alley'. Gross name, cool place." />
      </div>
    </>
  );
}
