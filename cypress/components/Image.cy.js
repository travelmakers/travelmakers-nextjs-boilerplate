import Image from '@/components/Image';

describe('<Image>', () => {
  it('mounts', () => {
    cy.mount(
      <Image src="/resource/main/banners/20230120/web/zzZKimZpn6EYWQ4irQJhmEG5ZI2R6UGjNPdeK7FP.jpg"
        width={500}
        height={500}
        alt="11" />
    )
  })
})