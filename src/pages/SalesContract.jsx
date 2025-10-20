import React, { useRef, useState } from "react";

export default function SalesContract() {
  const contractRef = useRef();
  const canvasRef = useRef();
  const [isDrawing, setIsDrawing] = useState(false);
  const [signed, setSigned] = useState(false);
  const [contractorName, setContractorName] = useState("");
  const [contractorEmail, setContractorEmail] = useState("");
  const [errors, setErrors] = useState({});

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSigned(false);
    setErrors(prev => ({ ...prev, signature: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!contractorName.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!contractorEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(contractorEmail)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!signed) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let isEmpty = true;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] !== 0) {
          isEmpty = false;
          break;
        }
      }
      if (isEmpty) {
        newErrors.signature = "Signature is required";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let isEmpty = true;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] !== 0) {
        isEmpty = false;
        break;
      }
    }
    if (isEmpty) {
      setErrors(prev => ({ ...prev, signature: "Please sign before saving" }));
      return;
    }
    setSigned(true);
    setErrors(prev => ({ ...prev, signature: "" }));
  };

  const printContract = () => {
    if (!validateForm()) return;
    window.print();
  };

  const downloadAsHTML = () => {
    if (!validateForm()) return;

    const signatureData = canvasRef.current.toDataURL();
    
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Sales Contract - ${contractorName}</title>
    <style>
        body { 
            font-family: 'Times New Roman', serif; 
            max-width: 800px; 
            margin: 40px auto; 
            padding: 40px;
            background: white;
            color: #000;
            line-height: 1.6;
        }
        h1 { 
            text-align: center;
            font-size: 20px; 
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        h2 { 
            font-size: 14px; 
            margin-top: 25px;
            margin-bottom: 10px;
            font-weight: bold;
        }
        p, li { 
            font-size: 12px;
            margin-bottom: 10px;
            text-align: justify;
        }
        ul {
            margin-left: 20px;
        }
        .signature-section { 
            margin-top: 50px; 
            padding-top: 20px;
        }
        .signature-img { 
            border: 1px solid #000;
            max-width: 400px;
            margin-top: 10px;
        }
        .info-line {
            margin: 8px 0;
        }
    </style>
</head>
<body>
    <h1>Independent Contractor Agreement — Sales Executive</h1>
    <p>This Independent Contractor Agreement ("Agreement") is made between <strong>Pixel & Code</strong> (the "Company") and the Contractor (the "Sales Executive") named below.</p>

    <h2>1. Position & Services</h2>
    <p>The Contractor will act as a Sales Executive, identifying, contacting and closing leads for the Company's AI-powered web solutions. The Contractor is an independent contractor and not an employee of the Company.</p>

    <h2>2. Term</h2>
    <p>This Agreement begins on the date of signing and continues for a fixed term of <strong>six (6) months</strong>, unless earlier terminated in accordance with this Agreement. The Agreement may be extended for an additional six (6) months by mutual written agreement based on satisfactory performance.</p>

    <h2>3. Compensation</h2>
    <p>The Contractor will receive a <strong>30% commission</strong> on all closed leads (net revenue) introduced and closed by the Contractor. Commission becomes payable <strong>after the client payment has cleared</strong> in full. Commissions will be paid within 30 days after client payment clearance.</p>

    <h2>4. Payment Procedure</h2>
    <ul>
        <li>The Contractor will submit invoices or commission statements monthly to the Company.</li>
        <li>Payments to third parties, refunds, chargebacks or unpaid client invoices will adjust the Contractor's commission accordingly.</li>
    </ul>

    <h2>5. Contractor Obligations</h2>
    <ul>
        <li>Use professional sales practices and represent the Company accurately.</li>
        <li>Maintain records of leads, communications, proposals and contracts and provide reports upon request.</li>
        <li>Comply with applicable laws and avoid misrepresentations.</li>
    </ul>

    <h2>6. Confidentiality</h2>
    <p>The Contractor shall not disclose the Company's confidential information during the Term and for 24 months thereafter. Confidential information includes but is not limited to client lists, pricing, proposals and proprietary processes.</p>

    <h2>7. Non-Compete & Non-Solicit</h2>
    <p>During the Term and for 6 months after termination, the Contractor shall not directly solicit the Company's active clients for competing services. The Parties acknowledge local law may limit the enforceability of non-compete clauses.</p>

    <h2>8. Termination</h2>
    <p>Either party may terminate this Agreement with 14 days' written notice. Grounds for immediate termination include fraud, breach of confidentiality, or gross misconduct.</p>

    <h2>9. Intellectual Property</h2>
    <p>The Contractor acknowledges all marketing materials and deliverables created for the Company remain the Company's property unless otherwise agreed in writing.</p>

    <h2>10. Independent Contractor Status</h2>
    <p>The Contractor is responsible for their own taxes, social security, and statutory obligations. No benefits or employee rights are provided under this Agreement.</p>

    <h2>11. Governing Law</h2>
    <p>This Agreement shall be governed by the laws of Kenya, and any disputes will be resolved in Nairobi courts where permitted by law.</p>

    <h2>12. Entire Agreement</h2>
    <p>This Agreement constitutes the full understanding between the Parties and supersedes prior discussions.</p>

    <div class="signature-section">
        <h2>Signatures</h2>
        <div class="info-line"><strong>Contractor Name:</strong> ${contractorName}</div>
        <div class="info-line"><strong>Email:</strong> ${contractorEmail}</div>
        <div class="info-line"><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
        <div class="info-line"><strong>Signature:</strong></div>
        <img src="${signatureData}" class="signature-img" alt="Signature" />
    </div>

    <p style="text-align: center; margin-top: 60px; font-size: 11px;">
        Pixel & Code — Sales Executive Agreement • Nairobi, Kenya
    </p>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${contractorName.replace(/\s+/g, '_')}_Sales_Contract.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const submitContract = () => {
    if (!validateForm()) return;
    
    const contractData = {
      name: contractorName,
      email: contractorEmail,
      signature: canvasRef.current.toDataURL(),
      timestamp: new Date().toISOString()
    };
    
    console.log('Contract Data:', contractData);
    
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
          }
          body { 
            background: white !important;
            margin: 0;
            padding: 0;
          }
          .no-print { display: none !important; }
          .contract-container { 
            background: white !important; 
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          /* Hide browser default headers and footers */
          header, footer { display: none !important; }
        }
        @media screen {
          body { background: #f5f5f5; }
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        <div ref={contractRef} className="contract-container bg-white border border-gray-300 p-8 sm:p-12 shadow-sm">
          <h1 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide">
            Independent Contractor Agreement — Sales Executive
          </h1>
          
          <p className="mb-6 text-justify leading-relaxed">
            This Independent Contractor Agreement ("Agreement") is made between <strong>Pixel & Code</strong> (the "Company") and the Contractor (the "Sales Executive") named below.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-base mb-2">1. Position & Services</h2>
              <p className="text-justify leading-relaxed">
                The Contractor will act as a Sales Executive, identifying, contacting and closing leads for the Company's AI-powered web solutions. The Contractor is an independent contractor and not an employee of the Company.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">2. Term</h2>
              <p className="text-justify leading-relaxed">
                This Agreement begins on the date of signing and continues for a fixed term of <strong>six (6) months</strong>, unless earlier terminated in accordance with this Agreement. The Agreement may be extended for an additional six (6) months by mutual written agreement based on satisfactory performance.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">3. Compensation</h2>
              <p className="text-justify leading-relaxed">
                The Contractor will receive a <strong>30% commission</strong> on all closed leads (net revenue) introduced and closed by the Contractor. Commission becomes payable <strong>after the client payment has cleared</strong> in full. Commissions will be paid within 30 days after client payment clearance.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">4. Payment Procedure</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>The Contractor will submit invoices or commission statements monthly to the Company.</li>
                <li>Payments to third parties, refunds, chargebacks or unpaid client invoices will adjust the Contractor's commission accordingly.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">5. Contractor Obligations</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use professional sales practices and represent the Company accurately.</li>
                <li>Maintain records of leads, communications, proposals and contracts and provide reports upon request.</li>
                <li>Comply with applicable laws and avoid misrepresentations.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">6. Confidentiality</h2>
              <p className="text-justify leading-relaxed">
                The Contractor shall not disclose the Company's confidential information during the Term and for 24 months thereafter. Confidential information includes but is not limited to client lists, pricing, proposals and proprietary processes.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">7. Non-Compete & Non-Solicit</h2>
              <p className="text-justify leading-relaxed">
                During the Term and for 6 months after termination, the Contractor shall not directly solicit the Company's active clients for competing services. The Parties acknowledge local law may limit the enforceability of non-compete clauses.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">8. Termination</h2>
              <p className="text-justify leading-relaxed">
                Either party may terminate this Agreement with 14 days' written notice. Grounds for immediate termination include fraud, breach of confidentiality, or gross misconduct.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">9. Intellectual Property</h2>
              <p className="text-justify leading-relaxed">
                The Contractor acknowledges all marketing materials and deliverables created for the Company remain the Company's property unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">10. Independent Contractor Status</h2>
              <p className="text-justify leading-relaxed">
                The Contractor is responsible for their own taxes, social security, and statutory obligations. No benefits or employee rights are provided under this Agreement.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">11. Governing Law</h2>
              <p className="text-justify leading-relaxed">
                This Agreement shall be governed by the laws of Kenya, and any disputes will be resolved in Nairobi courts where permitted by law.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-base mb-2">12. Entire Agreement</h2>
              <p className="text-justify leading-relaxed">
                This Agreement constitutes the full understanding between the Parties and supersedes prior discussions.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-gray-300">
              <h2 className="font-bold text-lg mb-6">Signatures</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Contractor Full Name *</label>
                  <input 
                    value={contractorName} 
                    onChange={(e) => {
                      setContractorName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: "" }));
                    }}
                    className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-gray-600" 
                    placeholder="Enter full legal name" 
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Contractor Email *</label>
                  <input 
                    type="email"
                    value={contractorEmail} 
                    onChange={(e) => {
                      setContractorEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: "" }));
                    }}
                    className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-gray-600" 
                    placeholder="email@example.com" 
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input 
                    type="text"
                    value={new Date().toLocaleDateString()}
                    disabled
                    className="w-full border border-gray-400 rounded px-3 py-2 bg-gray-50" 
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium mb-2">Signature (draw below) *</p>
                <div className="border-2 border-gray-400 rounded bg-white">
                  <canvas 
                    ref={canvasRef}
                    width={800}
                    height={200}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className="w-full cursor-crosshair"
                    style={{ touchAction: 'none' }}
                  />
                </div>
                {errors.signature && <p className="text-red-600 text-sm mt-1">{errors.signature}</p>}
                
                <div className="flex gap-2 mt-3 no-print">
                  <button 
                    onClick={clearSignature} 
                    className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-50 transition-colors"
                  >
                    Clear Signature
                  </button>
                  <button 
                    onClick={saveSignature} 
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    Save Signature
                  </button>
                </div>

                {signed && (
                  <div className="mt-3 text-green-700 text-sm no-print">✓ Signature saved successfully</div>
                )}

                <div className="mt-8 flex gap-3 flex-wrap no-print">
                  <button 
                    onClick={printContract} 
                    className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors font-medium"
                  >
                    Print / Save as PDF
                  </button>
                  <button 
                    onClick={downloadAsHTML} 
                    className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-50 transition-colors font-medium"
                  >
                    Download HTML
                  </button>
                  <button 
                    onClick={submitContract} 
                    className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors font-medium"
                  >
                    Submit & Print
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-600">
            Pixel & Code — Sales Executive Agreement • Nairobi, Kenya
          </div>
        </div>
      </div>
    </div>
  );
}