import type { ReactNode } from "react";

import { Col, Container, Row } from "@/components/ui/grid";

import styles from "./section-head.module.css";

type Props = {
  num: string;
  name: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
};

export function SectionHead({ num, name, kicker, title, lede }: Props) {
  return (
    <Container className={styles.head}>
      <Row rowGap={24}>
        <Col span={12} md={3}>
          <div className={styles.tag}>
            <span className={styles.num}>{num}</span>
            <span className={styles.name}>{name}</span>
            <span>{kicker}</span>
          </div>
        </Col>
        <Col span={12} md={9}>
          <h2 className={styles.title}>{title}</h2>
          {lede ? <p className={styles.lede}>{lede}</p> : null}
        </Col>
      </Row>
    </Container>
  );
}
