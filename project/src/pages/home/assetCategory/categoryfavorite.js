import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Row,
    Col
} from 'reactstrap';

const items = [
    {
        src: 'https://ecs7.tokopedia.net/img/cache/1190/attachment/2019/6/29/25568798/25568798_695c630e-756d-4820-ac72-69efe9f86c68.jpg.webp',
        altText: 'Coffe & Tea',
        caption: 'Maker'
    },
    {
        src: 'https://ecs7.tokopedia.net/img/blog/promo/2019/06/Feature_940x339-1.jpg',
        altText: 'Tas Selempang',
        caption: 'Pria'
    },
    {
        src: 'https://ecs7.tokopedia.net/img/blog/promo/2019/04/Feature-Image-940x339-110.jpg',
        altText: 'Flat Shoes',
        caption: 'Wanita'
    },
    {
        src: 'https://ecs7.tokopedia.net/img/blog/promo/2019/04/Feature-Image-940x339-110.jpg',
        altText: 'Makanan',
        caption: 'Kering'
    }
];

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 2 }}><img style={{ width: '500px' }} src={item.src} alt={item.altText} /></Col>
                    </Row>

                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default Banner;