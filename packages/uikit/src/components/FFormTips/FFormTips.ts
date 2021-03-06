import "./FFormTips.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VLayout, VFlex, VIcon } from "vuetify/lib";
import { mdiUnfoldMoreHorizontal, mdiUnfoldLessHorizontal } from "@mdi/js";
import { $t } from "../../utils/helper";

export interface Tip {
  hide?: boolean;
  component?: string;
  text?: string;
  error?: boolean;
}

@Component({ inheritAttrs: false })
class FFormTips extends Vue {
  @Prop({ type: Array, default: () => [] }) tips!: Tip[];

  @Prop({ type: Number, default: 3 }) max!: number;

  showAll = false;

  get meta() {
    const tips = this.tips.filter(
      (tip) => !tip.hide && (tip.component || tip.text),
    );
    return {
      items: this.showAll ? tips : tips.slice(0, this.max),
      isActionVisible: tips.length > this.max,
    };
  }

  isLastTip(index) {
    const n = index + 1;
    return n > this.max && n === this.meta.items.length;
  }

  genActionBtn() {
    const h = this.$createElement;
    if (!this.meta.isActionVisible) return null;

    return h(
      VLayout,
      {
        staticClass: "f-form-tips__item f-form-tips__item--more",
        on: {
          click: () => (this.showAll = !this.showAll),
        },
      },
      [
        h("div", { staticClass: "f-form-tips__icon" }, [
          h(VIcon, { props: { size: "14", color: "primary" } }, [
            this.showAll ? mdiUnfoldLessHorizontal : mdiUnfoldMoreHorizontal,
          ]),
        ]),
        h(VFlex, { staticClass: "f-form-tips__text caption py-1" }, [
          this.showAll ? $t(this, "fold") : $t(this, "more"),
        ]),
      ],
    );
  }

  genTips() {
    const h = this.$createElement;
    const items = this.meta.items.map((tip) => {
      return h(
        VLayout,
        {
          staticClass: "f-form-tips__item",
          class: [tip.error && "f-form-tips__item--error"],
        },
        [
          h("div", { staticClass: "f-form-tips__icon" }),
          h(
            VFlex,
            {
              staticClass: "f-form-tips__text caption py-1",
            },
            [
              tip.component
                ? h(tip.component, {
                    props: { ...this.$attrs },
                    on: { ...this.$listeners },
                  })
                : tip.text,
            ],
          ),
        ],
      );
    });

    return h("div", { staticClass: "f-form-tips__items" }, [items]);
  }

  render(h: CreateElement): VNode {
    return h(VLayout, { staticClass: "f-form-tips" }, [
      h(VFlex, { staticClass: "f-form-tips__wrapper" }, [
        h("div", { staticClass: "f-form-tips__line" }),
        this.genTips(),
        this.genActionBtn(),
      ]),
      this.$slots.action,
    ]);
  }
}

export default FFormTips;
