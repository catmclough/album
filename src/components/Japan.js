import Header from './Header';
import Photo from './Photo';
import './Japan.css';

export default function Japan() {
  return (
    <>
      <Header text="Japan" />
      <div class="photo-section">
        <Photo src="/japan/tsukiji.JPG" alt="Tsukiji Market Fish Vendor" />
        <Photo src="/japan/sushi-breakfast.JPG" alt="Emma eating at a Tsukiji sushi restaurant" />
      </div>
    </>
  );
}
