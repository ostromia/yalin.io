const gammaFunction = `<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
	<mrow>
		<mrow>
			<mi mathvariant="normal">Γ</mi>
		</mrow>
		<mo form="prefix" stretchy="false">(</mo>
		<mi>z</mi>
		<mo form="postfix" stretchy="false">)</mo>
		<mo>=</mo>
		<msubsup>
			<mo movablelimits="false">∫</mo>
			<mn>0</mn>
			<mi>∞</mi>
		</msubsup>
		<msup>
			<mi>t</mi>
			<mrow>
				<mi>z</mi>
				<mo>−</mo>
				<mn>1</mn>
			</mrow>
		</msup>
		<msup>
			<mi>e</mi>
			<mrow>
				<mo>−</mo>
				<mi>t</mi>
			</mrow>
		</msup>
		<mi>d</mi>
		<mi>t</mi>
	</mrow>
</math>`;

const upperIncompleteGammaFunction = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
	<mrow>
		<mrow>
			<mi mathvariant="normal">Γ</mi>
		</mrow>
		<mo form="prefix" stretchy="false">(</mo>
		<mi>s</mi>
		<mo separator="true">,</mo>
		<mi>x</mi>
		<mo form="postfix" stretchy="false">)</mo>
		<mo>=</mo>
		<msubsup>
			<mo movablelimits="false">∫</mo>
			<mi>x</mi>
			<mi>∞</mi>
		</msubsup>
		<msup>
			<mi>t</mi>
			<mrow>
				<mi>s</mi>
				<mo>−</mo>
				<mn>1</mn>
			</mrow>
		</msup>
		<msup>
			<mi>e</mi>
			<mrow>
				<mo>−</mo>
				<mi>t</mi>
			</mrow>
		</msup>
		<mi>d</mi>
		<mi>t</mi>
	</mrow>
</math>`;

const lowerIncompleteGammaFunction = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
	<mrow>
		<mi>γ</mi>
		<mo form="prefix" stretchy="false">(</mo>
		<mi>s</mi>
		<mo separator="true">,</mo>
		<mi>x</mi>
		<mo form="postfix" stretchy="false">)</mo>
		<mo>=</mo>
		<msubsup>
			<mo movablelimits="false">∫</mo>
			<mn>0</mn>
			<mi>x</mi>
		</msubsup>
		<msup>
			<mi>t</mi>
			<mrow>
				<mi>s</mi>
				<mo>−</mo>
				<mn>1</mn>
			</mrow>
		</msup>
		<msup>
			<mi>e</mi>
			<mrow>
				<mo>−</mo>
				<mi>t</mi>
			</mrow>
		</msup>
		<mi>d</mi>
		<mi>t</mi>
	</mrow>
</math>`;

const regularizedLowerIncompleteGammaFunction = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>P</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>a</mi>
    <mo separator="true">,</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mrow>
          <mi mathvariant="normal">Γ</mi>
        </mrow>
        <mo form="prefix" stretchy="false">(</mo>
        <mi>a</mi>
        <mo form="postfix" stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <msubsup>
      <mo movablelimits="false">∫</mo>
      <mn>0</mn>
      <mi>x</mi>
    </msubsup>
    <msup>
      <mi>t</mi>
      <mrow>
        <mi>a</mi>
        <mo>−</mo>
        <mn>1</mn>
      </mrow>
    </msup>
    <msup>
      <mi>e</mi>
      <mrow>
        <mo>−</mo>
        <mi>t</mi>
      </mrow>
    </msup>
    <mi>d</mi>
    <mi>t</mi>
  </mrow>
</math>`;

const regularizedUpperIncompleteGammaFunction = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>Q</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>a</mi>
    <mo separator="true">,</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mrow>
          <mi mathvariant="normal">Γ</mi>
        </mrow>
        <mo form="prefix" stretchy="false">(</mo>
        <mi>a</mi>
        <mo form="postfix" stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <msubsup>
      <mo movablelimits="false">∫</mo>
      <mi>x</mi>
      <mi>∞</mi>
    </msubsup>
    <msup>
      <mi>t</mi>
      <mrow>
        <mi>a</mi>
        <mo>−</mo>
        <mn>1</mn>
      </mrow>
    </msup>
    <msup>
      <mi>e</mi>
      <mrow>
        <mo>−</mo>
        <mi>t</mi>
      </mrow>
    </msup>
    <mi>d</mi>
    <mi>t</mi>
  </mrow>
</math>`;

const qplusp = `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>Q</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>a</mi>
    <mo separator="true">,</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>+</mo>
    <mi>P</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>a</mi>
    <mo separator="true">,</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mn>1</mn>
  </mrow>
</math>`;

export default {
	gammaFunction,
	lowerIncompleteGammaFunction,
	upperIncompleteGammaFunction,
	regularizedLowerIncompleteGammaFunction,
	regularizedUpperIncompleteGammaFunction,
	qplusp
}
