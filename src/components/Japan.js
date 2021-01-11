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
        <Photo src="/japan/piss-alley.JPG" alt="Me walking through 'Piss Alley'. Gross name, cool place." />
        <Photo src="/japan/alley.JPG" alt="Random alley" />
        <Photo src="/japan/newspaper.JPG" alt="A newspaper in Japanese" />
        <Photo src="/japan/tourists.JPG" alt="Mostly white tourists at the robot show in Shinjuku" />
        <Photo src="/japan/baby-bike.JPG" alt="A woman on a bike with one baby in the back and one in the front" />
        <Photo src="/japan/corgi.JPG" alt="Corgi and its owner crossing the street" />
        <Photo src="/japan/golden-gai.JPG" alt="Me drinking whiskey at a tiny bar in Golden Gai" />
        <Photo src="/japan/chips.PNG" alt="Chips through the eyes of a bad translation app" />
        <Photo src="/japan/harry-potter.JPG" alt="Finding my fortune for the low low price of 100 yen" />
        <Photo src="/japan/ichiran.JPG" alt="Emma at the Ichiran Ramen solo dining bar" />
        <Photo src="/japan/outlook.JPG" alt="Looking out from the inside of a temple" />
        <Photo src="/japan/surfbort.JPG" alt="A surfboard leaned against a wall in Tokyo" />
        <Photo src="/japan/temple.JPG" alt="Shot looking up at the top of a temple" />
      </div>
    </>
  );
}
