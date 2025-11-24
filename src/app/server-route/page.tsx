import { ServerSideText } from '@/utils/utils';
import { SliderImage } from '@/components/sliderImage';

export default function ServerRoute() {
  const result = ServerSideText();

  return <>
    <h1>Server route {result}</h1>
    <SliderImage />
  </>
}